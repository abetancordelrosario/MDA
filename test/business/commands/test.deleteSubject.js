let assert = require("chai").assert,
    testSetupContents = require("../../testSetupContents.js"),
    commandFactory = require("../../../business/commands/commandsFactory.js");

describe ("Business / Command / Subject", function()
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
    it("Should delete a Subject", async() =>
    {
        await testSetupContents().givenAnySubject({name: "nombre1", university: "universidad1", faculty: "Escuela1"});
        await testSetupContents().givenAnySubject({name: "nombre2", university: "universidad2", faculty: "Escuela2"});
        let anySubjectId = {
            ID: 1
        };
        let results = await testSetupContents().getAnySubjects();
        assert.equal(results[0].NAME, "nombre1");
        assert.equal(results[0].UNIVERSITY, "universidad1");
        assert.equal(results.length, 2);

        await commandFactory.deleteSubject().execute(anySubjectId);
        results = await testSetupContents().getAnySubjects();
        assert.equal(results.length, 1);
    });
});