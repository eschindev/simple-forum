const sequelize = require("../config/connection");
const { User, Post, Reply } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const replyData = require("./replyData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  const replies = await Reply.bulkCreate(replyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
