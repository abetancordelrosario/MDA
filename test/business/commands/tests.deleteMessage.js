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
    it("Should delete a message", async() =>
    {
        const anyMessageId = 1;
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba"});

        await commandFactory.deleteMessage().execute(anyMessageId);

        results = await testSetupContents().getAnyMessages({subjectid: 1});
        assert.isNull(results);
    });
});