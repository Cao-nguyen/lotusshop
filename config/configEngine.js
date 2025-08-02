const express = require('express')
const path = require('path')

const configEngine = (app) => {
    app.set('views', path.join(__dirname, '../views'))
    app.set('view engine', 'pug')

    app.use(express.static(path.join(__dirname, '../public')))
}

module.exports = configEngine