import { Router } from "express";
import { pool } from "../utils/db.js";
import bcrypt from "bcrypt";

const authRouter = Router();

authRouter.get("/", async (req, res) => {

  const result = await pool.query("select * from users");

  return res.json({
    data: result.rows,
  });
});

authRouter.post("/", async (req, res) => {
const hasRegistered = req.body.status === "registered";
const newUser = {
        ...req.body,
     };
const salt = await bcrypt.genSalt(10);
     
newUser.password = await bcrypt.hash(newUser.password, salt);
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
         newUser.id_number,
         newUser.date_of_birth,
         newUser.country,
         newUser.profile_picture,
         newUser.role,
         newUser.card_number,
         newUser.card_owner,
         newUser.expiry_date,
         newUser.cvc_cvv
       ]
     );
  
     return res.json({
       message: "User has been created.",
     });
   });
export default authRouter;
