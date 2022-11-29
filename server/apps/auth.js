import { Router } from "express";
import { pool } from "../utils/db.js";
import { validateRegisterData } from "../middlewares/auth.validations.js";
import multer from "multer";
import bcrypt from "bcrypt";
import { register, login } from "../controllers/auth.controller.js";
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
  const id = req.params.id;
  const result = await pool.query("select * from users where user_id = $1", [
    id,
  ]);
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

authRouter.put("/edit/:id", avatarUpload, async (req, res) => {
  const id = req.params.id;
  console.log("req.files", req.files.avatar);
  console.log("body", req.body);

  let newAvatar;
  const editUser = {
    ...req.body,
  };

  if (req.files.avatar === undefined) {
    console.log("old pic");
    const result = await pool.query(
      `UPDATE users
      SET fullname = $2, email = $3, id_number = $4,
      date_of_birth = $5, country = $6
      where user_id = $1
      RETURNING *`,
      [
        id,
        editUser.fullname,
        editUser.email,
        editUser.idnumber,
        editUser.dob,
        editUser.country,
      ]
    );
    return res.json({
      // data: result.rows,
      message: "update user succesfully",
    });
  } else {
    console.log("new pic");

    const avatarUrl = await cloudinaryUpload(req.files);
    editUser["profile_picture"] = avatarUrl[0].url;
    newAvatar = avatarUrl[0].url;
    const result = await pool.query(
      `UPDATE users
      SET fullname = $2, email = $3, id_number = $4,
      date_of_birth = $5, country = $6, profile_picture= $7
      where user_id = $1
      RETURNING *`,
      [
        id,
        editUser.fullname,
        editUser.email,
        editUser.idnumber,
        editUser.dob,
        editUser.country,
        editUser.profile_picture,
      ]
    );

    const token = jwt.sign(
      {
        id: id,
        fullname: editUser.fullname,
        profile_picture: newAvatar,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "900000",
      }
    );

    return res.json({
      // data: result.rows,
      message: "update user succesfully",
      token,
    });
  }
});

// edit payment method

authRouter.put("/edit/paymentmethod/:id", avatarUpload, async (req, res) => {
  const id = req.params.id;
  console.log("body", req.body);

  const editPayment = {
    ...req.body,
  };

  const result = await pool.query(
    `UPDATE users
      SET card_number = $2, card_owner = $3, expiry_date = $4,
      cvc_cvv = $5
      where user_id = $1
      RETURNING *`,
    [
      id,
      editPayment.cardNumber,
      editPayment.cardOwner,
      editPayment.cardExpiry,
      editPayment.cardCVV,
    ]
  );

  return res.json({
    // data: result.rows,
    message: "update user succesfully",
  });
});

// edit hotelinfo
authRouter.put("/edit/hotelinfo/:id", avatarUpload, async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  console.log(req.files);

  let newAvatar;
  const editHotel = {
    ...req.body,
  };

  if (req.files.avatar === undefined) {
    console.log("old pic");
    const result = await pool.query(
      `UPDATE hotel_info
      SET hotel_name = $2, hotel_desc = $3
      where hotel_info_id = $1
      RETURNING *`,
      [id, editHotel.hotelName, editHotel.hotelDesc]
    );
    return res.json({
      message: "update user succesfully",
    });
  } else {
    console.log("new pic");

    const avatarUrl = await cloudinaryUpload(req.files);
    editHotel["hotel_logo"] = avatarUrl[0].url;
    newAvatar = avatarUrl[0].url;
    const result = await pool.query(
      `UPDATE hotel_info
      SET hotel_name = $2, hotel_desc = $3, hotel_logo = $4
      where hotel_info_id = $1
      RETURNING *`,
      [id, editHotel.hotelName, editHotel.hotelDesc, editHotel.hotel_logo]
    );

    return res.json({
      message: "update user succesfully",
    });
  }
});

authRouter.get("/hotelinfo/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await pool.query(
    "select * from hotel_info where hotel_info_id = $1",
    [id]
  );
  return res.json({
    data: result.rows,
  });
});

export default authRouter;
