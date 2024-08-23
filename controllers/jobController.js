import 'express-async-errors'
import Job from '../models/JobModel.js';


// GET ALL JOBS
export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    return res.status(200).json({ jobs });
};

// CREATE JOB
export const createJob = async (req, res) => {
    const job = await Job.create(req.body);
    return res.status(201).json({ job });
};

// GET SINGLE JOB
export const getJob = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    };
    return res.status(200).json({ job });
};

// EDIT JOB
export const updateJob = async (req, res) => {
    const { id } = req.params;
  
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
    });
  
    if (!updatedJob) {
      return res.status(404).json({ msg: `no job with id ${id}` });
    };
    return res.status(200).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id);
  
    if (!removedJob) {
      return res.status(404).json({ msg: `no job with id ${id}` });
    };
    return res.status(200).json({ job: removedJob });
};