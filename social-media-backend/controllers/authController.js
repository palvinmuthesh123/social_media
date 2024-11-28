const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  UserModel.registerUser(username, email, hashedPassword, (err) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ message: 'User Registered Successfully' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  UserModel.findUserByEmail(email, async (err, results) => {
    if (err || results.length === 0) return res.status(400).json({ error: 'User not found' });

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid Credentials' });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '10000000000000000h' });
    res.json({ token });
  });
};
