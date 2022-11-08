import { Router } from "express";
import { pool } from "../utils/db.js";
import { validateRegisterData } from "../middlewares/auth.validations.js";
import multer from "multer";
const authRouter = Router();
const multerUpload = multer({ dest: "uploads/" });
const avatarUpload = multerUpload.fields([{ name: "avatar", maxCount: 2 }]);
import register from "../controllers/register.js";
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
export default authRouter;
