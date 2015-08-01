'use strict';

let request = require('supertest');
let app = require('../../index');

describe('Hello world', function () {
    it('should return 200 status and Hello HRMS', function (done) {
        request(app.listen())
            .get('/')
            .expect(200)
            .expect('Hello HRMS')
            .end(done);
    });
}); 
