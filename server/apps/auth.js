import { Router } from "express";
import { pool } from "../utils/db.js";
import { validateRegisterData } from "../middlewares/auth.validations.js";
import multer from "multer";

import bcrypt from "bcrypt";
import { register, login } from "../controllers/controller.js";
const authRouter = Router();
const multerUpload = multer({ dest: "uploads/" });

const avatarUpload = multerUpload.fields([{ name: "avatar", maxCount: 2 }]);

authRouter.get("/", async (req, res) => {
  const result = await pool.query("select * from users");

  return res.json({
    data: result.rows,
  });
});
authRouter.post(
  "/register",
  avatarUpload,
  [validateRegisterData],
  (req, res) => {
    register(req, res);
  }
);

authRouter.post("/login", (req, res) => {
  login(req, res);
});

export default authRouter;
