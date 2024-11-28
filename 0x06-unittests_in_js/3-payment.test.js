const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with SUM, 100, 20', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy.returned(120)).to.be.true;

        spy.restore();
    });
});
