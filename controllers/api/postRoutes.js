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

router.put("/:id", async (req, res) => {
  try {
    let postData = await Post.findByPk(req.params.id);

    if (req.session.user_id !== postData.user_id) {
      return res
        .status(400)
        .json({ message: "Failed to update post: this is not your post." });
    }

    postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      return res
        .status(400)
        .json({ message: "Failed to update post. Please try again." });
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let postData = await Post.findByPk(req.params.id);

    if (req.session.user_id !== postData.user_id) {
      return res
        .status(400)
        .json({ message: "Failed to delete post: this is not your post." });
    }

    postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      return res
        .status(400)
        .json({ message: "Failed to delete post. Please try again." });
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
