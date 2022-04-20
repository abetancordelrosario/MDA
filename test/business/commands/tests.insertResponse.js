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

    it("Should insert a response for a specified message", async() =>
    {
        let anyResponseInfo = {
            anyMessageId: 1,
            anyResponse: "Respuesta de Prueba"
        }
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba"});
        
        await commandFactory.insertResponse().execute(anyResponseInfo);

        let results = await testSetupContents().getAnyResponse({message: 1});
        assert.equal(results[0].response, 1);
        assert.equal(results[0].text, "Respuesta de Prueba");
    })
});