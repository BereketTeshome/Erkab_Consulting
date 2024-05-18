const router = require("express").Router();
const { GetNews, CreateNews } = require("../controllers/newsController");

router.get("/getNews", GetNews);
router.post("/postNews", CreateNews);

module.exports = router;
