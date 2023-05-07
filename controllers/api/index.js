const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const replyRoutes = require("./replyRoutes");

router.use("/users", userRoutes);
router.use("/post", postRoutes);
router.use("/reply", replyRoutes);

module.exports = router;
