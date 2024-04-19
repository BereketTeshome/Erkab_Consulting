const router = require("express").Router();
const { Register, Login, getUsers } = require("../controllers/userController");

router.post("/register", Register);
router.post("/login", Login);
router.get("/users", getUsers);

module.exports = router;
