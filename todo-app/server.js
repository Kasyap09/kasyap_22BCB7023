const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});