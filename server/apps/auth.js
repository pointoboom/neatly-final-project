import { Router } from "express";
import { pool } from "../utils/db.js";
import { validateRegisterData } from "../middlewares/auth.validations.js";
import multer from "multer";
import bcrypt from "bcrypt";
import {
  register,
  login,
  editPayment,
  editHotelInfo,
  getHotelInfo,
  editUserProfile,
  getUserProfile,
} from "../controllers/auth.controller.js";
const authRouter = Router();
const multerUpload = multer({ dest: "uploads/" });
const avatarUpload = multerUpload.fields([{ name: "avatar", maxCount: 2 }]);
import { cloudinaryUpload } from "../utils/upload.js";
import jwt from "jsonwebtoken";

authRouter.get("/", async (req, res) => {
  const result = await pool.query("select * from users");
  return res.json({
    data: result.rows,
  });
});

authRouter.get("/:id", async (req, res) => {
  getUserProfile(req, res);
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

authRouter.put("/edit/:id", avatarUpload, async (req, res) => {
  editUserProfile(req, res);
});

// edit payment method
authRouter.put("/edit/paymentmethod/:id", avatarUpload, async (req, res) => {
  editPayment(req, res);
});

// edit hotelinfo
authRouter.put("/edit/hotelinfo/:id", avatarUpload, async (req, res) => {
  editHotelInfo(req, res);
});

// get hotelinfo
authRouter.get("/hotelinfo/:id", async (req, res) => {
  getHotelInfo(req, res);
});

export default authRouter;
