import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
];

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
    res.json({ message: 'Data received', data: req.body });
});
  
app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json({ jobs });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server running on PORT ${port}...`);
});