
// To run: node node_modules/.bin/mocha
var request = require("request"),
    assert = require('assert'),
    //app = require("./app.js"),
    base_url = "http://localhost:3000/";

describe("Gimbal management server", function() {
  describe("GET /", function() {     								//Test 1
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(response.statusCode).toBe(200);
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });

  describe("GET /hello_world", function() {							//Test 2
  	it("returns Hello", function(done) {
      request.get(base_url+"hello_world", function(error, response, body) {
        //expect(body).toBe("Hello World");
        assert.equal("Hello", body);
        //adminportal.closeServer();
        done();
      });
    });
  	 });

   describe("POST /activateBeacon", function() {					//Test 3
   	it('should respond with 200 after activating beacon', function(done) {
   	var options = { method: 'POST',
  	url: 'http://localhost:3000/activateBeacon',
  	headers: 
   { 'postman-token': 'bc5de42c-06ba-e449-cf37-d270b04ff5d7',
     'cache-control': 'no-cache',
     'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
  	'formData': { 'factory_id': 'Q9UY-R4Z7K', 'name': 'G' } };
  	
  	request(options, function (error, response, body) {
  	if (error) throw new Error(error);

  	assert.equal(200, response.statusCode);
  	done();
	});

	});
});
	
});

   		/*it('should respond with redirect on post', function(done) {
    	request(app)
      .post(base_url+'/api/members')
      .send({formData: { factory_id: 'Q9UY-R4Z7K', name: 'G' }})
      .expect(200)
      .end(function(err, res) {
        if (err) done(err);
        done();
      });
  }); */
   	

/*
var options = { method: 'POST',
  url: 'http://localhost:3000/activateBeacon',
  headers: 
   { 'postman-token': 'bc5de42c-06ba-e449-cf37-d270b04ff5d7',
     'cache-control': 'no-cache',
     'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
  formData: { factory_id: 'Q9UY-R4Z7K', name: 'G' } };



it('should respond with redirect on post', function(done) {
    request(app)
      .post('/api/members')
      .send({"participant":{"nuid":"98ASDF988SDF89SDF89989SDF9898"}})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('participant');
        res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
        done();
      });
  });
*/