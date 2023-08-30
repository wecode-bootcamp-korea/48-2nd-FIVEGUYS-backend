const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const myApplicationRouter = require("./myApplicationRouter");

router.use("/users", userRouter);
router.use("/applications", myApplicationRouter);

module.exports = router;