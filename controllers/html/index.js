const router = require("express").Router();
const homeRoutes = require("./homeRoutes.js");
const postRoutes = require("./postRoutes.js");

router.use("/post", postRoutes);
router.use("/", homeRoutes);

module.exports = router;
