import { Router } from "express";
import { pool } from "../utils/db.js";
import { validateRegisterData } from "../middlewares/auth.validations.js";
import multer from "multer";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import register from "../controllers/register.js";
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

authRouter.get("/roomdetails", async (req, res) => {
  const result = await pool.query("select * from room_types");

  return res.json({
    data: result.rows,
  });
});

authRouter.post("/login", async (req, res) => {
  const user = await pool.query("select * from users where email=$1", [
    req.body.username,
  ]);

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.rows[0].password
  );

  if (!isValidPassword) {
    return res.status(401).json({
      message: "password not valid",
    });
  }

  const token = jwt.sign(
    {
      id: user.rows[0].user_id,
      fullname: user.rows[0].fullname,
      profile_picture: user.rows[0].profile_picture,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "900000",
    }
  );

  return res.json({
    message: "login succesfully",
    token,
  });
});

export default authRouter;
