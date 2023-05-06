const router = require("express").Router();
const { User, Post } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const postData = await Post.create(req.body);

    if (!postData) {
      return res
        .status(400)
        .json({ message: "Failed to create post. Please try again." });
    }

    res.status(200).json(postData);
  } catch (err) {
    return res.status(500).json(err);
  }
});
