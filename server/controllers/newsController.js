const News = require("../model/News");

const GetNews = async (req, res) => {
  try {
    const news = await News.find({}).sort({ createdAt: -1 });
    res.status(200).json({ news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const CreateNews = async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json({ news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { GetNews, CreateNews };
