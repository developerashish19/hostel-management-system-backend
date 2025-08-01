const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const hostelRoutes = require('./routes/hostel');
const roomRoutes = require('./routes/room');


dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route imports
const authRoutes = require('./routes/auth');

// Use Routes
app.use('/api/auth', authRoutes);  // 👈 Auth route

// Root Route
app.get('/', (req, res) => {
  res.send('🏨 Hostel Management Backend is running...');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
