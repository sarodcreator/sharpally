import { Company } from "../models/company-model.js"

//companyRegistration
export const companyRegistration = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Comapany name is required.",
                success: false
            });
        }

        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "You cannot register the same company.",
                success: false
            })
        };
        company = await Company.create({
            name: company,
            userId: req.id
        });

        return res.status(201).json({
            message: "Company registered successfully",
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

//getCompany
export const getCompany = async (req, res) => {
    try {
        const userId = res.id;
        const companies = await Company.find({ userId });

        if (!companies) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            companies,
            success: true
        })
    } catch (error) {
        console.error("Error getting company", error.message);
    }
}

//getCompanyById
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }

        return res.status(200).json({
            company,
            success: true
        });
    } catch (error) {
        console.error("Could get Company Id.", error.message);
    }
}

//updateCompany
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        const file = req.file;
        const updateData = { name, description, website, location };
        const company = await Company.findByIdAndUpdate(req.params.Id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "comapny not found.",
                success: false
            });
        };

        return res.status(200).json({
            message: "Company information updated.",
            success: true
        });

    } catch (error) {
        console.error("Couldn't update company", error.message);
    }
}