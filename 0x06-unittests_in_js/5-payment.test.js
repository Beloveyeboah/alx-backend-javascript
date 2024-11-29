const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleLogSpy.restore();
  });

  it('should log the correct total for 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledOnce);
    assert(consoleLogSpy.calledWith('The total is: 120'));
  });

  it('should log the correct total for 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    assert(consoleLogSpy.calledOnce);
    assert(consoleLogSpy.calledWith('The total is: 20'));
  });
});
