const router = require("express").Router();
const { CreateNews, GetNews } = require("../controllers/newsController");

router.post("/postNews", CreateNews);
router.get("/getNews", GetNews);

module.exports = router;
