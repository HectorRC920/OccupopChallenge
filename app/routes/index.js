const express = require('express');
const loginRouter = require('./login');

class routerAPI {
    constructor(app) {
        //normal express API config
        this.app = app;
        this.router = express.Router();
        // add /api/v1 to all routes
        this.app.use('/api/v1', this.router);
        // add login router
        this.router.use('/login', loginRouter);
    }
}

module.exports = routerAPI;