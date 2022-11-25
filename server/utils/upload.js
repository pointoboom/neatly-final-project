import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

const cloudinaryUpload = async (files) => {
  const fileUrl = [];
  for (let file of files.avatar) {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "techupth/Neatly-project",
      type: "private",
    });
    fileUrl.push({
      url: result.secure_url,
      publicId: result.public_id,
    });
    await fs.unlink(file.path);
  }
  return fileUrl;
};

const RoomImageUpload = async (files) => {
  const fileUrl = [];
  for (let file of files.main_img) {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "techupth/Neatly-project/roomImage",
      type: "private",
    });
    fileUrl.push({
      main_url: result.secure_url,
      publicId: result.public_id,
    });
    await fs.unlink(file.path);
  }
  for (let file of files.gallery_img) {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "techupth/Neatly-project/roomImage",
      type: "private",
    });
    fileUrl.push({
      gal_url: result.secure_url,
      publicId: result.public_id,
    });
    await fs.unlink(file.path);
  }
  return fileUrl;
};
export { cloudinaryUpload, RoomImageUpload };
