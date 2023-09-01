import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'


const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); 
}

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.post('/', (req, res) => {
    res.json(req.body).send();
})

const port = process.env.PORT || 5100
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})