import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import { randomUUID } from 'crypto';

let jobs = [
 { id: randomUUID(), company: 'apple', position: 'front-end'},
 { id: randomUUID(), company: 'google', position: 'back-end'},
]
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); 
}

// GET ALL JOBS
app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json({jobs}).send();
})

// CREATE JOB
app.post('/api/v1/jobs', (req, res) => {
    const {company, position} = req.body;
    if (!company || !position) {
        return res.status(400).json({msg: 'please provide company and position'}).send();
    } 
    const job = {
        id: randomUUID(),
        company,
        position
    }
    jobs.push(job);
    return res.status(200).json({job}).send();
})

// GET SIGLE JOB
app.get('/api/v1/jobs/:id', (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({msg: `no job with id ${id}`}).send();
    }
    return res.status(200).json({job}).send();
})

// EDIT JOB
app.patch('/api/v1/jobs/:id', (req, res) => {
    const {company, position} = req.body;
    if (!company || !position) {
        return res.status(400).json({msg: 'please provide company and position'}).send();
    }

    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({msg: `no job with id ${id}`}).send();
    }

    job.company = company;
    job.position = position;

    return res.status(200).json({msg: 'job modified', job}).send();
})

// DELETE JOB
app.delete('/api/v1/jobs/:id', (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({msg: `no job with id ${id}`}).send();
    }

    const newJobs = jobs.filter((job) => job.id !== id);
    jobs = newJobs;

    return res.status(200).json({msg: 'job deleted'}).send();
})

const port = process.env.PORT || 5100
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})