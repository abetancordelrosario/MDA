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
        
        await appAgent.post("/api/messages").send(anyMessageInfo);

        let results = await testSetupContents().getAnyMessages({subjectid: 1});
        assert.isArray(results);
        assert.equal(results[0].MESSAGE, "Mensaje de Prueba");
    })

    it("Should delete a message", async() =>
    {
        const anyMessageId = {
            id: 1
        };
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba"});

        await appAgent.delete("/api/messages").send(anyMessageId);

        results = await testSetupContents().getAnyMessages({subjectid: 1});
        assert.isEmpty(results);
    });

    it("Should insert a response for a specified message", async() =>
    {
        let anyResponseInfo = {
            messageid: 1,
            response: "Respuesta de Prueba"
        }
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba"});
        
        await appAgent.post("/api/messages/response").send(anyResponseInfo);

        let results = await testSetupContents().getAnyMessages({subjectid: 1});
        let responses = JSON.parse(results[0].RESPONSES);
        assert.equal(responses[0].id, 1);
        assert.equal(responses[0].text, "Respuesta de Prueba");
    })
});