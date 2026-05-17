import express from "express";
const router = express.Router();

import { createUser, getUsers } from "../controllers/user.controller.js";

router.post("/create" , createUser);
router.get("/getUsers" , getUsers);

export default router;