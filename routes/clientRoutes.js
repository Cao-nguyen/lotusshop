const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('./client/home/home.pug', { title: "Trang chủ" })
})

router.get('/gioithieu', (req, res) => {
    res.render('./client/introduce/introduce.pug', { title: "Giới thiệu" })
})

router.get('/sanpham', (req, res) => {
    res.render('./client/products/product.pug', { title: "Sản phẩm" })
})

module.exports = router