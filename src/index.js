require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const configEngine = require('./config/configEngine')
const webRoutes = require('./routes/client')

// config
configEngine(app)

// router
app.use(webRoutes)

app.listen(PORT, () => {
    console.log(`http://localhost:3000`);
});