require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Lý Cao Nguyên")
})

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
