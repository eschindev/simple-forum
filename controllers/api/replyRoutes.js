const router = require("express").Router();
const { User, Reply } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const replyData = await Reply.create(req.body);

    if (!replyData) {
      return res
        .status(400)
        .json({ message: "Failed to create reply. Please try again." });
    }

    res.status(200).json(replyData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let replyData = await Reply.findByPk(req.params.id);

    if (req.session.user_id !== replyData.user_id) {
      return res
        .status(400)
        .json({ message: "Failed to update reply: this is not your reply." });
    }

    replyData = await Reply.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!replyData) {
      return res
        .status(400)
        .json({ message: "Failed to update reply. Please try again." });
    }

    res.status(200).json(replyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let replyData = await Reply.findByPk(req.params.id);

    if (req.session.user_id !== replyData.user_id) {
      return res
        .status(400)
        .json({ message: "Failed to delete reply: this is not your reply." });
    }

    replyData = await Reply.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!replyData) {
      return res
        .status(400)
        .json({ message: "Failed to delete reply. Please try again." });
    }

    res.status(200).json(replyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
