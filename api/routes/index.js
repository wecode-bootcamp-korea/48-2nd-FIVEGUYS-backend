const express = require("express");
const router = express.Router();
const positionsRouter = require("./positionsRouter");
const userRouter = require("./userRouter");
const resumeRouter = require("./resumeRouter");
const uploadRouter = require("./uploadRouter");
const myApplicationRouter = require("./myApplicationRouter");

router.use("/positions", positionsRouter);
router.use("/users", userRouter);
router.use("/resumes", resumeRouter);
router.use("/uploads", uploadRouter);
router.use("/applications", myApplicationRouter);

module.exports = router;