'use strict';

let app = module.exports = require('koa')();

app.use(function *() {
    this.body = 'Hello HRMS';
});

app.listen(process.env.APP_PORT || 3000);
