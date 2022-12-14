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

  if (user.rows.length === 0) {
    return res.json({
      message: "user not found",
      success: false,
    });
  } else {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.rows[0].password
    );

    if (!isValidPassword) {
      return res.json({
        message: "password not valid",
        success: false,
      });
    }
  }

  const token = jwt.sign(
    {
      id: user.rows[0].user_id,
      fullname: user.rows[0].fullname,
      profile_picture: user.rows[0].profile_picture,
      dob: user.rows[0].date_of_birth,
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

export async function editPayment(req, res) {
  try {
    const id = req.params.id;
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
      message: "update payment medthod succesfully",
    });
  } catch (error) {
    console.log(error);
  }
}

export async function editHotelInfo(req, res) {
  try {
    const id = req.params.id;
    let newAvatar;
    const editHotel = {
      ...req.body,
    };

    if (req.files.avatar === undefined) {
      const result = await pool.query(
        `UPDATE hotel_info
    SET hotel_name = $2, hotel_desc = $3, hotel_num=$4,hotel_email=$5,hotel_location=$6
    where hotel_info_id = $1
    RETURNING *`,
        [
          id,
          editHotel.hotelName,
          editHotel.hotelDesc,
          editHotel.hotelTelNum,
          editHotel.hotelEmail,
          editHotel.hotelLocation,
        ]
      );
      return res.json({
        message: "update hotel information succesfully",
      });
    } else {
      const avatarUrl = await cloudinaryUpload(req.files);
      editHotel["hotel_logo"] = avatarUrl[0].url;
      newAvatar = avatarUrl[0].url;
      const result = await pool.query(
        `UPDATE hotel_info
    SET hotel_name = $2, hotel_desc = $3, hotel_logo = $4,hotel_num=$5,hotel_email=$6,hotel_location=$7
    where hotel_info_id = $1
    RETURNING *`,
        [
          id,
          editHotel.hotelName,
          editHotel.hotelDesc,
          editHotel.hotel_logo,
          editHotel.hotelTelNum,
          editHotel.hotelEmail,
          editHotel.hotelLocation,
        ]
      );

      return res.json({
        message: "update hotel information succesfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getHotelInfo(req, res) {
  try {
    const id = req.params.id;
    const result = await pool.query(
      "select * from hotel_info where hotel_info_id = $1",
      [id]
    );
    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
}
export async function getUserProfile(req, res) {
  try {
    const id = req.params.id;
    const result = await pool.query("select * from users where user_id = $1", [
      id,
    ]);
    return res.json({
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function editUserProfile(req, res) {
  try {
    const id = req.params.id;
    let newAvatar;
    const editUser = {
      ...req.body,
    };

    if (req.files.avatar === undefined) {
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
        message: "update user succesfully",
      });
    } else {
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
        message: "update user succesfully",
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
