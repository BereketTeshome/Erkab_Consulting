const News = require("../model/News");

const CreateNews = async (req, res) => {
  const { newsImage, newsTitle, newsBody } = req.body;

  if (!newsBody || !newsImage || !newsTitle) {
    return res.json({ error: "Please provide every Inputs" });
  }

  try {
    const news = await News.create(req.body);
    res.status(201).json({ news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetNews = async (req, res) => {
  try {
    const news = await News.find({});
    res.status(200).json({ news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { CreateNews, GetNews };
