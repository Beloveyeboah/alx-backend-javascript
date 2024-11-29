const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let calculateNumberStub, consoleLogSpy;

  beforeEach(function() {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call calculateNumber with correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    assert(calculateNumberStub.calledOnce);
    assert(calculateNumberStub.calledWith(100, 20));
  });

  it('should log the correct total', function() {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledWith('The total is: 10'));
  });
});
