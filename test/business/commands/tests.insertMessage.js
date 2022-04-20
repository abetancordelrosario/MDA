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

    it("Should insert a message for a specified user and subject", async() =>
    {
        let anyMessageInfo = {
            subjectid: 1, 
            userid: 1, 
            message: "Mensaje de Prueba"
        }
        
        await commandFactory.insertMessage().execute(anyMessageInfo);

        let results = await testSetupContents().getAnyMessage({subjectid: 1});
        assert.isArray(results);
        assert.equal(results[0].MESSAGE, "Mensaje de Prueba");
    })
});