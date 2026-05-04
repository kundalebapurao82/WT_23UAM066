const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
});

// Routes
const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

const homeRoutes = require('./routes/home');
app.use('/', homeRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});