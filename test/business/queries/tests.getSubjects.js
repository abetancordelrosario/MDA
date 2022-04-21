let assert = require("chai").assert,
    testSetupContents = require("../../testSetupContents.js"),
    queriesFactory = require("../../../business/queries/queriesFactory.js");

describe("Business / Queries / Subjects", function()
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

    it("Should return subject info", async() =>
    {
        
        await testSetupContents().givenAnySubject({name: "nombre1", university: "universidad1", faculty: "Escuela1"});
        // let anySubjectsInfo = {
        //     display_name: "display1",
        //     passwd: password
        // }
        
        const results = await queriesFactory.getSubjects().execute();
        
        assert.equal(results[0].NAME, "nombre1");
        assert.equal(results[0].UNIVERSITY, "universidad1");
    });
});
