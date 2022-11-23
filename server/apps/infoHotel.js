import { Router } from "express";
import { pool } from "../utils/db.js";
const hotelRouter = Router();

hotelRouter.post("/hotel", async (req, res) => {
    const hasPublished = req.body.status === "published";
    const newHotel = {
        ...req.body,
    };
},
    await pool.query(
        `insert into hotel (name, description, logo)
    values ($1, $2, $3)`,
        [
            newHotel.name,
            newHotel.description,
            newHotel.logo,
        ]
    ));

return res.json({
    message: "Hotel's information has been created.",
})

hotelRouter.put("/hotel/:hotelid", async (req, res) => {
    const hasPublished = req.body.status === "published";
    const updateHotel = {
        ...req.body,
    };
    const postId = req.params.id;
},


    await pool.query(
        `update hotel
      set name=$1, description=$2, logo=$3
    `,
        [
            updateHotel.name,
            updateHotel.description,
            updateHotel.logo,
        ]
    ));

return res.json({
    message: `Hotel's Information has been updated.`,
});

export default hotelRouter;
