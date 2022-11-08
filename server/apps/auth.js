import { Router } from "express";
import { pool } from "../utils/db.js";
import bcrypt from "bcrypt";
import { validateRegisterData } from "../middlewares/auth.validations.js";
import multer from "multer";
import { cloudinaryUpload } from "../utils/upload.js";
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
  async (req, res) => {
    const newUser = {
      ...req.body,
    };
    let message = "";
    let success = Boolean;

    const checkEmail = await pool.query("select * from users where email=$1", [
      newUser.email,
    ]);

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    const avatarUrl = await cloudinaryUpload(req.files);
    newUser["profile_picture"] = avatarUrl[0].url;
    if (!checkEmail.rows[0]) {
      // console.log("ไม่เจอemail);
      await pool.query(
        `insert into users
           (fullname, username, email, password, id_number, date_of_birth,
           country, profile_picture, role, card_number, card_owner, expiry_date, cvc_cvv)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
        [
          newUser.fullname,
          newUser.username,
          newUser.email,
          newUser.password,
          newUser.idnumber,
          newUser.dob,
          newUser.country,
          newUser.profile_picture,
          newUser.role,
          newUser.cardnum,
          newUser.cardowner,
          newUser.expdate,
          newUser.cvc,
        ]
        // [
        //   newUser.fullname,
        //   newUser.username,
        //   newUser.email,
        //   newUser.password,
        //   newUser.id_number,
        //   newUser.date_of_birth,
        //   newUser.country,
        //   newUser.profile_picture,
        //   newUser.role,
        //   newUser.card_number,
        //   newUser.card_owner,
        //   newUser.expiry_date,
        //   newUser.cvc_cvv,
        // ]
      );
      message = "User has been created.";
      console.log("User has been created.");
      success = true;
    } else {
      // console.log("เจอemail หรือ user");
      message = "duplicate email";
      console.log("duplicate email");
      success = false;
    }

    return res.json({
      message: message,
      success: success,
    });
  }
);

export default authRouter;
