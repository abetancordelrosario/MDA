let assert = require("chai").assert,
    testSetupContents = require("../testSetupContents.js"),
    md5 = require("md5"),
    queriesFactory = require("../../business/commands/commandsFactory.js"),
    app = require("../../app.js"),
    supertest = require("supertest"),
    appAgent = supertest.agent(app);

describe ("Controllers / Subjects / API", function()
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

    // it("Should return Subject info", async() =>
    // {
        
    //     await testSetupContents().givenAnySubject({name: "nombre1", university: "universidad1", faculty: "Escuela1"});

    //     const response = await appAgent.get("/api/subjects");
    //     let results = JSON.parse(response.text);
    //     console.log(results);

    //     assert.equal(results[0].NAME, "nombre1");
    //     assert.equal(results[0].UNIVERSITY, "universidad1");
    // });

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

        await appAgent.delete("/api/subjects").send(anySubjectId);

        results = await testSetupContents().getAnySubjects();
        assert.equal(results.length, 1);
    });
});