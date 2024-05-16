const router = require("express").Router();
const { GetNews } = require("../controllers/newsController");

router.get("/getNews", GetNews);

module.exports = router;
