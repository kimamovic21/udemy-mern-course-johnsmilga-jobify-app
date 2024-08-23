import Job from '../models/JobModel.js';
import { nanoid } from 'nanoid';

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
];

// GET ALL JOBS
export const getAllJobs = async (req, res) => {
    res.status(200).json({ jobs });
};

// CREATE JOB
export const createJob = async (req, res) => {
  const { company, position } = req.body;
  try {
    const job = await Job.create({ company, position });
    res.status(201).json({ job });
  } catch (error) {
    res.status(500).json({ msg: 'server error' });
  }
};

// GET SINGLE JOB
export const getJob = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        throw new Error('no job with that id');
        return res.status(404).json({ msg: `no job with id ${id}` });
    };
    res.status(200).json({ job });
};

// EDIT JOB
export const updateJob = (req, res) => {
    const { company, position } = req.body;
    if (!company || !position) {
        return res.status(400).json({ msg: 'please provide company and position' });
    };
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    };

    job.company = company;
    job.position = position;
    res.status(200).json({ msg: 'job modified', job });
};

export const deleteJob = (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
      return res.status(404).json({ msg: `no job with id ${id}` });
    };
    const newJobs = jobs.filter((job) => job.id !== id);
    jobs = newJobs;
  
    res.status(200).json({ msg: 'job deleted' });
};