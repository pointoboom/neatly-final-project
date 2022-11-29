import { Router } from "express";
import { pool } from "../utils/db.js";
import multer from "multer";
import { cloudinaryUpload } from "../utils/upload.js";
const authRouter = Router();
const multerUpload = multer({ dest: "uploads/" });
const avatarUpload = multerUpload.fields([{ name: "avatar", maxCount: 2 }]);
const hotelRouter = Router();
const navigate = useNavigate();
const params = useParams();
hotelRouter.post("/hotel", async (req, res) => {
    const hasPublished = req.body.status === "published";
    const newHotel = {
        name: req.body.name,
        description: req.body.description,
        logo: req.body.logo,
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
console.log(req.files.avatar)
hotelRouter.put("/hotel/:hotelid", async (req, res) => {
    const hasPublished = req.body.status === "published";
    const updateHotel = {
        ...req.body,
    };
    const hotelId = req.params.id;
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
await cloudinaryUpload(req.files);
const avatarUrl = await cloudinaryUpload(req.files);
user["avatars"] = avatarUrl;

return res.json({
    message: "User has been created successfully",
});
export default hotelRouter;
