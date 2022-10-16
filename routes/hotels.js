import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

//create hotels
router.post("/", createHotel)
//update hotels
router.put("/:id", updateHotel)
//delete hotels
router.delete("/:id", deleteHotel)
//get one hotel
router.get("/:id", getHotel)
//get all hotels
router.get("/", getHotels
    // const failed=true;
    // if(failed) return next(createError(401,"You have no access"))

)
export default router;