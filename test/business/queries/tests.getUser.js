let assert = require("chai").assert,
    testSetupContents = require("../../testSetupContents.js"),
    md5 = require("md5"),
    queriesFactory = require("../../../business/queries/queriesFactory.js");

describe("Business / Queries / User", function()
{
    beforeEach(function(done)
    {
        testSetupContents().deleteRepositoryContent()
        .then(function()
        {
            done();
        })
        .catch(function(error){
            done(error);
        })
    });

    it("Should return user info", async() =>
    {
        const password = md5("1234");
        await testSetupContents().givenAnyUser({name: "nombre1", surname: "apellidos1", display_name: "display1", email: "email1@gmail.com", phone: "123 456 789", passwd: password, rol: 0, points: 5, organization: "ULPGC", time_stamp: "17/03/2022 12:13:25"});
        let anyUserInfo = {
            display_name: "display1",
            passwd: password
        }
        
        const results = await queriesFactory.getUser().execute(anyUserInfo);
        
        assert.equal(results[0].NAME, "nombre1");

    });
});