const express = require('express');
const path = require('path')

const configEngine = (app) => {
    // view engine
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configEngine