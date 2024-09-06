import 'express-async-errors'
import mongoose from 'mongoose';
import day from 'dayjs';
import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';


export const getAllJobs = async (req, res) => {
    console.log(req.query);
    const jobs = await Job.find({ 
        createdBy: req.user.userId,
        position: req.query.search 
    });
    return res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    return res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
    const job = await Job.findById(req.params.id);
    return res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(StatusCodes.OK).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
    const removedJob = await Job.findByIdAndDelete(req.params.id);
    return res.status(StatusCodes.OK).json({ job: removedJob });
};

export const showStats = async (req, res) => {
    let stats = await Job.aggregate([
        { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
        { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
    ]);
    console.log(stats);

    stats = stats.reduce((acc, curr) => {
        const { _id: title, count } = curr;
        acc[title] = count;
        return acc;
    }, {});
    console.log(stats);

    const defaultStats = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0,
    };
    console.log(defaultStats);

    let monthlyApplications = await Job.aggregate([
        { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
        { 
            $group: {
                _id: { 
                    year: { $year: '$createdAt' }, 
                    month: { $month: '$createdAt' },
                },
                count: { $sum: 1 }, 
            }
        },
        {
            $sort: { '_id.year': -1, '_id.month': -1 },
        },
        {
            $limit: 6
        },
    ]);

    monthlyApplications = monthlyApplications.map((item) => {
        const { _id: { year, month }, count } = item;

        const date = day().month(month - 1).year(year).format('MMM YY');
        
        return { date, count };
    }).reverse();
    
    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};