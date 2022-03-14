// Chai assertion functions
const should = require('chai').should();
const expect = require('chai').expect;

// Supertest
const supertest = require('supertest');
const api = supertest(require('../index'));

// Get all gifs
describe('GET /api/users', () => {
	it('should return a 200 response', (done) => {
		api.get('/api/users').set('Accept', 'application/json').expect(200, done);
	});

	it('should return an array', (done) => {
		api
			.get('/api/users')
			.set('Accept', 'application/json')
			.end((error, response) => {
				expect(response.body).to.be.an('array');
				done();
			});
	});

	it('should return objects with name, url and tags properties', (done) => {
		api
			.get('/api/users')
			.set('Accept', 'application/json')
			.end((error, response) => {
				response.body.forEach((user) => {
					expect(user).to.have.property('name');
					expect(user).to.have.property('reads');
					expect(user).to.have.property('tags');
				});
				done();
			});
	});
});
