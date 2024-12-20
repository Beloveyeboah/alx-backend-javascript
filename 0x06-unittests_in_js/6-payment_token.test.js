const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true).then(response => {
      assert.deepStrictEqual(response, { data: 'Successful response from the API' });
      done();
    }).catch(error => done(error));
  });
});
