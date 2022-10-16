import express from "express";
import {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE rooms
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE room
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GEt room
router.get("/:id", getRoom);
//GET ALL rooms
router.get("/", getRooms);

export default router;