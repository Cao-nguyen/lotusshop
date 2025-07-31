const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Kết nối MongoDB
mongoose.connect('mongodb+srv://caonguyen:nguyen2009@lotusshop.sfzyhe3.mongodb.net/?retryWrites=true&w=majority&appName=lotusshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Đã kết nối MongoDB'))
    .catch(err => console.log('Lỗi MongoDB:', err));

// Middleware
app.use(express.json());

// Route mẫu
app.get('/', (req, res) => {
    res.send('Server đang chạy...');
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});