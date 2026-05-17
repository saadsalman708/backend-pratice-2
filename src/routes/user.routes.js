import express from "express";
const router = express.Router();

import { create , get } from "../controllers/user.controller.js";

router.post("/create" , create);
router.get("/getUsers" , get);

export default router;