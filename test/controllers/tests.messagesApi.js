let assert = require("chai").assert,
    testSetupContents = require("../testSetupContents.js"),
    md5 = require("md5"),
    queriesFactory = require("../../business/commands/commandsFactory.js"),
    app = require("../../app.js"),
    supertest = require("supertest"),
    appAgent = supertest.agent(app);

describe ("Controllers / Messages / API", function()
{
    beforeEach(function(done)
    {
        testSetupContents().deleteRepositoryContent()
        .then(function(){
            done();
        })
        .catch(function(error){
            done(error)
        })
    });

    it("Should return a message for a specified subject", async() =>
    {
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba"});
        
        const response = await appAgent.get("/api/messages/?subjectid=1");
        let results = JSON.parse(response.text);
        
        assert.equal(results[0].MESSAGE, "Mensaje de Prueba");
    });
});