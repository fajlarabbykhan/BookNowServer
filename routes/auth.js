import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from auth end point")
})
export default router;