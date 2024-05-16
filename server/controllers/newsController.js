const News = require("../model/News");

const GetNews = async (req, res) => {
  try {
    const news = await News.find({});
    res.status(200).json({ news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { GetNews };
