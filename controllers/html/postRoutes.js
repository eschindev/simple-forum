const router = require("express").Router();
const { User, Post, Reply } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id/edit", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const post = postData.get({ plain: true });
    console.log(post);
    res.render("edit-post", post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Reply,
          include: {
            model: User,
          },
          order: [["created_on", "ASC"]],
        },
      ],
    });

    post = postData.get({ plain: true });
    const ownedByUser = post.user_id == req.session.user_id;

    res.render("post", {
      post,
      logged_in: req.session.logged_in,
      current_user_id: req.session.user_id,
      owned_by_user: ownedByUser,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("new-post", { user_id: req.session.user_id });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
