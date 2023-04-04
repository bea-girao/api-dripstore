const app = require('express').Router();
const Banner = require('../../entity/banner');
const orm = require('../../connection/orm');

app.get('/banners', async (req, res) => {
    res.send('ok');
});

module.exports = app;