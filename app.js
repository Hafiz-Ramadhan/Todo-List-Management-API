
const express = require('express');

const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const activityLogRoutes = require('./routes/activityLogRoutes');
const statsRoutes = require('./routes/statsRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const errorHandler = require('./middleware/errorHandler');
const AppError = require('./util/AppError');

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/activity-logs', activityLogRoutes);
app.use('/api/stats', statsRoutes);

// HANDLE UNKNOWN ROUTES
app.use((req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} tidak ditemukan`, 404));
});

// GLOBAL ERROR HANDLER
app.use(errorHandler);

module.exports = app;
