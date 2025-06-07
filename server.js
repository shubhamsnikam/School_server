const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require('./routes/authRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const cashEntryRoutes = require('./routes/cashEntryRoutes');
const resultRoutes = require('./routes/resultRoutes');
const studentRoutes = require('./routes/studentRoutes');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/cashbook', cashEntryRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/students', studentRoutes);

// MongoDB Connection (Updated: Removed deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Start Server on Render-compatible port
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
