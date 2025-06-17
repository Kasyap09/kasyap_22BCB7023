const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/register', async (req, res) => {
const { username, password } = req.body;
const hashed = await bcrypt.hash(password, 10);
await User.create({ username, password: hashed });
res.sendStatus(201);
});

router.post('/login', async (req, res) => {
const { username, password } = req.body;
const user = await User.findOne({ username });
if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).send('Invalid');
const token = jwt.sign({ userId: user._id }, 'secret');
res.json({ token });
});

module.exports = router;