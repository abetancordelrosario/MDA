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

    it("Should return all the messages for a specified subject", async() =>
    {
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba"});
        let anyUserSubjectId = 1
        
        const results = await queriesFactory.getMessages().execute(anyUserSubjectId);
        
        assert.equal(results[0].MESSAGE, "Mensaje de Prueba");
    });
});