const User = require("../model/User");

const Login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ error: "Please provide username and password" });
  }
  const user = await User.findOne({ username });
  if (!user) {
    return res.json({ error: "Invalid username or password!" });
  }
  const compare = await user.comparePassword(password);
  if (!compare) {
    return res.json({ error: "Incorrect password!" });
  }
  try {
    const token = user.createToken();
    res.status(200).json({
      user: {
        name: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      },
      token: token,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const Register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !password) {
    return res.json({ error: "Please provide username and password" });
  }
  if (!email) {
    return res.json({ error: "Please provide email" });
  }

  try {
    const user = await User.create(req.body);
    const token = user.createToken();
    res.cookie("token", token);
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      res.status(500).json({ error: "email is already used" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ count: user.length, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { Login, Register, getUsers };
