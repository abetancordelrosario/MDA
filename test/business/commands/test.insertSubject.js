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
    it("Should insert a Subject", async() =>
    {
        const subjectInfo1 = {
            name: "asignatura1" ,
            university: "universidad1",
            faculty: "facultad1"
        }

        const subjectInfo2 = {
            name: "asignatura2" ,
            university: "universidad2",
            faculty: "facultad2"
        }

        await commandFactory.insertSubject().execute(subjectInfo1);
        let results = await testSetupContents().getAnySubjects();
        assert.equal(results[0].NAME, "asignatura1");
        assert.equal(results[0].UNIVERSITY, "universidad1");
        assert.equal(results[0].FACULTY, "facultad1");
        assert.equal(results.length, 1);

        await commandFactory.insertSubject().execute(subjectInfo2);
        results = await testSetupContents().getAnySubjects();

        assert.equal(results[0].NAME, "asignatura1");
        assert.equal(results[0].UNIVERSITY, "universidad1");
        assert.equal(results[0].FACULTY, "facultad1");
        assert.equal(results.length, 2);

        assert.equal(results[1].NAME, "asignatura2");
        assert.equal(results[1].UNIVERSITY, "universidad2");
        assert.equal(results[1].FACULTY, "facultad2");
        assert.equal(results.length, 2);

    });
});