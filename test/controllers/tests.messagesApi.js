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

    it("Should return all messages for a specified subject", async() =>
    {
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba"});
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 2, message: "Mensaje de Prueba 2"});
        await testSetupContents().givenAnyMessage({subjectid: 2, userid: 3, message: "Mensaje de Prueba 3"});
        let anyUserSubjectId = 1
        
        const response = await appAgent.get("/api/messages/?subjectid=1");
        let results = JSON.parse(response.text);

        assert.equal(results.length, 2);
        assert.equal(results[0].MESSAGE, "Mensaje de Prueba");
        assert.equal(results[1].MESSAGE, "Mensaje de Prueba 2");
    });

    it("Should insert a message for a specified user and subject", async() =>
    {
        let anyMessageInfo = {
            subjectid: 1, 
            userid: 1, 
            message: "Mensaje de Prueba"
        }
        
        const response = await appAgent.post("/api/messages").send(anyMessageInfo);

        let results = await testSetupContents().getAnyMessages({subjectid: 1});
        assert.isArray(results);
        assert.equal(results[0].MESSAGE, "Mensaje de Prueba");
    })
});