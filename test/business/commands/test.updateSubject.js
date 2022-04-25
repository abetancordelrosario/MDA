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
    it("Should update a Subject", async() =>
    {
        const subjectInfo3 = {
            id: 1,
            name: "asignatura3" ,
            university: "universidad3",
            faculty: "facultad3"
        }

        await testSetupContents().givenAnySubject({name: "asignatura1", university: "universidad1", faculty: "facultad1"});
        await testSetupContents().givenAnySubject({name: "asignatura2", university: "universidad2", faculty: "facultad2"});

        await commandFactory.updateSubject().execute(subjectInfo3);

        let results = await testSetupContents().getAnySubjects();
        assert.equal(results.length, 2);

        assert.equal(results[0].NAME, "asignatura3");
        assert.equal(results[0].UNIVERSITY, "universidad3");
        assert.equal(results[0].FACULTY, "facultad3");
        
        assert.equal(results[1].NAME, "asignatura2");
        assert.equal(results[1].UNIVERSITY, "universidad2");
        assert.equal(results[1].FACULTY, "facultad2");



    });
});