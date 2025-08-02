require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// config
const configEngine = require('./config/configEngine')
configEngine(app)

// routes
const clientRoutes = require('./routes/clientRoutes')
app.use(clientRoutes)

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
