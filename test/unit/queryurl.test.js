const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");

const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style

chai.use(chaiAsPromised);

const queryurl = require('../../index').queryUrl;


describe('Application', function () {

    it('Should - ok', async function () {

        await queryurl("https://google.com/").should.eventually.fulfilled;

    });

    it('Should - fails because no url provided', async function () {

        await queryurl().should.eventually.fulfilled;

    });

    it('Expect - ok', async function () {

        await expect(queryurl("https://google.com/")).to.eventually.fulfilled;

    });

    it('Expect - fails because no url provided', async function () {

        await expect(queryurl()).to.eventually.fulfilled;

    });


});