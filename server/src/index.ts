import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'

let jobs = [
 { id: 1, company: 'apple', position: 'front-end'},
 { id: 2, company: 'google', position: 'back-end'},
]
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); 
}

app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json(jobs).send();
})

const port = process.env.PORT || 5100
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})