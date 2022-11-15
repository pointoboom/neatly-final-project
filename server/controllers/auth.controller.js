import { cloudinaryUpload } from "../utils/upload.js";
import { pool } from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function register(req, res) {
  console.log(req.files);
  const newUser = {
    ...req.body,
  };
  let message = "";
  let success = Boolean;

  const checkEmail = await pool.query("select * from users where email=$1", [
    newUser.email,
  ]);
  console.log(checkEmail.rows[0]);
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  const avatarUrl = await cloudinaryUpload(req.files);
  newUser["profile_picture"] = avatarUrl[0].url;
  if (!checkEmail.rows[0]) {
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
    );
    message = "User has been created.";
    console.log("User has been created.");
    success = true;
  } else {
    message = "duplicate email";
    console.log("duplicate email");
    success = false;
  }
  return res.json({
    message: message,
    success: success,
  });
}

export async function login(req, res) {
  const user = await pool.query("select * from users where email=$1", [
    req.body.username,
  ]);
  let success = Boolean;

  if (user.rows.length === 0) {
    return res.json({
      message: "user not found",
      success: false,
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
    success: true,
    token,
    role: user.rows[0].role,
  });
}
