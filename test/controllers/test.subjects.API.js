let assert = require("chai").assert,
    testSetupContents = require("../testSetupContents.js"),
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

    it("Should return Subject info", async() =>
    {
        
        await testSetupContents().givenAnySubject({name: "nombre1", university: "universidad1", faculty: "Escuela1"});

        const response = await appAgent.get("/api/subjects");
        let results = JSON.parse(response.text);

        assert.equal(results[0].NAME, "nombre1");
        assert.equal(results[0].UNIVERSITY, "universidad1");
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

        await appAgent.delete("/api/subjects").send(anySubjectId);

        results = await testSetupContents().getAnySubjects();
        assert.equal(results.length, 1);
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
        
        await appAgent.post("/api/subjects").send(subjectInfo1);
        let results = await testSetupContents().getAnySubjects();
        assert.equal(results[0].NAME, "asignatura1");
        assert.equal(results[0].UNIVERSITY, "universidad1");
        assert.equal(results[0].FACULTY, "facultad1");
        assert.equal(results.length, 1);

        await appAgent.post("/api/subjects").send(subjectInfo2);
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

        await appAgent.put("/api/subjects").send(subjectInfo3);

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