let assert = require("chai").assert,
    testSetupContents = require("../../testSetupContents.js"),
    md5 = require("md5"),
    queriesFactory = require("../../../business/queries/queriesFactory.js");

describe("Business / Queries / Messages", function()
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

    it("Should return a message for a specified subject", async() =>
    {
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba"});
        let anyUserSubjectId = 1
        
        const results = await queriesFactory.getMessages().execute(anyUserSubjectId);
        
        assert.equal(results[0].MESSAGE, "Mensaje de Prueba");
    });

    it("Should return all messages for a specified subject", async() =>
    {
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba"});
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 2, message: "Mensaje de Prueba 2"});
        await testSetupContents().givenAnyMessage({subjectid: 2, userid: 3, message: "Mensaje de Prueba 3"});
        let anyUserSubjectId = 1
        
        const results = await queriesFactory.getMessages().execute(anyUserSubjectId);

        assert.equal(results.length, 2);
        assert.equal(results[0].MESSAGE, "Mensaje de Prueba");
        assert.equal(results[1].MESSAGE, "Mensaje de Prueba 2");
    });
});