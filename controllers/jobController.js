import 'express-async-errors'
import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';


// GET ALL JOBS
export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    return res.status(StatusCodes.OK).json({ jobs });
};

// CREATE JOB
export const createJob = async (req, res) => {
    const job = await Job.create(req.body);
    return res.status(StatusCodes.CREATED).json({ job });
};

// GET SINGLE JOB
export const getJob = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    };
    return res.status(StatusCodes.OK).json({ job });
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
    return res.status(StatusCodes.OK).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id);
  
    if (!removedJob) {
      return res.status(404).json({ msg: `no job with id ${id}` });
    };
    return res.status(StatusCodes.OK).json({ job: removedJob });
};