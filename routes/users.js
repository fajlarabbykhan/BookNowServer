import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/authentication", verifyToken, (req, res, next) => {
//     res.send("U are loged in")
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("User --- U are loged in, u can delete ur account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Admin --- U are loged in, u can delete all accounts")
// })
//update user
router.put("/:id", verifyUser, updateUser)
//delete user
router.delete("/:id", verifyUser, deleteUser)
//get one user
router.get("/:id", verifyUser, getUser)
//get all users
router.get("/", verifyAdmin, getUsers)
export default router;