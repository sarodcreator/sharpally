import express from 'express';
import { getCompany, getCompanyById, companyRegistration, updateCompany } from "../control/company-control.js";
import isAuthenticated from '../auth/isAuth.js';

const companyRouter = express.Router();

companyRouter.route("/register").post(companyRegistration);
companyRouter.route("/get").get(isAuthenticated, getCompany);
companyRouter.route("/get/:id").get(isAuthenticated, getCompanyById);
companyRouter.route("/profile/update/:id").put(isAuthenticated, updateCompany);

export default companyRouter;