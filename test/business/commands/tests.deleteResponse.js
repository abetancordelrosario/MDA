let assert = require("chai").assert,
    testSetupContents = require("../../testSetupContents.js"),
    md5 = require("md5"),
    commandFactory = require("../../../business/commands/commandsFactory.js");

describe ("Business / Command / Messages", function()
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
    it("Should delete a response for a specified Message", async() =>
    {
        const anyResponseToDelete = {
            messageid: 1,
            id: 1
        };
        const anyResponses = [
            {
                id: 1,
                text: "Respuesta de Prueba"
            },
            {
                id: 2,
                text: "Respuesta de Prueba 2"
            }
        ]
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba", responses: JSON.stringify(anyResponses)});

        await commandFactory.deleteResponse().execute(anyResponseToDelete);

        results = await testSetupContents().getAnyMessages({subjectid: 1});
        let responses = JSON.parse(results[0].RESPONSES);
        assert.equal(responses[0].id, 2);
        assert.equal(responses[0].text, "Respuesta de Prueba 2");
    });
});