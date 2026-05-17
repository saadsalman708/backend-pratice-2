import express from "express";
const router = express.Router();

import { create , get , remove } from "../controllers/user.controller.js";

router.post("/create" , create);
router.get("/getUsers" , get);
router.delete("/deleteUser/:id" , remove);

export default router;