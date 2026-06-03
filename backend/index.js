// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: ["https://orange-space-yodel-5ggrjv99pv9vfpp94-5173.app.github.dev"],
}));

mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));