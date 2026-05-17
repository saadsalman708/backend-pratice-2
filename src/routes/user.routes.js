import express from "express";
const router = express.Router();

import { createUser, getAllUsers } from "../controllers/user.controller.js";

router.post("/create" , createUser);
router.get("/getUsers" , getAllUsers);

export default router;