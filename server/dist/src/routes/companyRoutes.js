import express from "express";
import { getCategories, getCities, getCompanyProfile, getPublicCompanies, updateCompanyProfile, } from "../controllers/companyController";
const router = express.Router();
router.get("/categories", getCategories);
router.get("/cities", getCities);
router.get("/listing", getPublicCompanies);
router.get("/:userId", getCompanyProfile);
router.put("/:userId", updateCompanyProfile);
export default router;
