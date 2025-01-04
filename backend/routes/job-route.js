import express from 'express';
import isAuthenticated from '../auth/isAuth.js';
import { getAdminJobs, getAllJobs, getJobsById, postjob } from '../control/job-control.js';

const jobRoute = express.Router();

jobRoute.route("/post").post(isAuthenticated, postjob);
jobRoute.route("/get").get(isAuthenticated, getAllJobs);
jobRoute.route("/getAdminjobs").post(isAuthenticated, getAdminJobs);
jobRoute.route("/get/:id").post(isAuthenticated, getJobsById)

export default jobRoute;