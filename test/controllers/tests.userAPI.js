let assert = require("chai").assert,
    testSetupContents = require("../testSetupContents.js"),
    md5 = require("md5"),
    queriesFactory = require("../../business/commands/commandsFactory.js"),
    app = require("../../app.js"),
    supertest = require("supertest"),
    appAgent = supertest.agent(app);

describe ("Controllers / User / API", function()
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

    it("Should return user info", async() =>
    {
        const password = md5("1234");

        
        await testSetupContents().givenAnyUser({name: "nombre1", surname: "apellidos1", display_name: "display1", email: "email1@gmail.com", phone: "123 456 789", passwd: password, rol: 0, points: 5, organization: "ULPGC", time_stamp: "17/03/2022 12:13:25"});
        let anyUserInfo = {
            display_name: "display1",
            passwd: password
        }
        
        const response = await appAgent.get("/api/users").send(anyUserInfo);
        let results = JSON.parse(response.text);
        
        assert.equal(results[0].NAME, "nombre1");

    });

    it("Should insert user info", async() =>
    {
        const password = md5("1234");
        let anyUserInfo = {
            name: "nombre1", 
            surname: "apellidos1", 
            display_name: "display1", 
            email: "email1@gmail.com", 
            phone: "123 456 789", 
            passwd: password, 
            rol: 0, 
            points: 5, 
            organization: "ULPGC", 
            time_stamp: "17/03/2022 12:13:25"
        }
        
        await appAgent.post("/api/users").send(anyUserInfo);
        let results = await testSetupContents().getAnyUser({name: "nombre1", surname: "apellidos1"});
        
        assert.equal(results[0].NAME, "nombre1");
        assert.equal(results[0].PASSWD, password);
    });

    it("Should delete user info", async() =>
    {
        const password = md5("1234");
        await testSetupContents().givenAnyUser({name: "nombre1", surname: "apellidos1", display_name: "display1", email: "email1@gmail.com", phone: "123 456 789", passwd: password, rol: 0, points: 5, organization: "ULPGC", time_stamp: "17/03/2022 12:13:25"});
        await testSetupContents().givenAnyUser({name: "nombre1", surname: "apellidos1", display_name: "display2", email: "email2@gmail.com", phone: "123 456 789", passwd: password, rol: 0, points: 5, organization: "ULPGC", time_stamp: "17/03/2022 12:13:25"});
        let anyUserId = {
            ID: 1
        };
        let results = await testSetupContents().getAnyUser({name: "nombre1", surname: "apellidos1"});
        assert.equal(results[0].NAME, "nombre1");
        assert.equal(results[0].PASSWD, password);
        assert.equal(results.length, 2);

        await appAgent.delete("/api/users").send(anyUserId);
        results = await testSetupContents().getAnyUser({name: "nombre1", surname: "apellidos1"});
        assert.equal(results.length, 1);
    });

    it("Should update user info", async() =>
    {
        const password = md5("1234");
        const password2 = md5("4321");
        await testSetupContents().givenAnyUser({name: "nombre1", surname: "apellidos1", display_name: "display1", email: "email1@gmail.com", phone: "123 456 789", passwd: password, rol: 0, points: 5, organization: "ULPGC", time_stamp: "17/03/2022 12:13:25"});
        await testSetupContents().givenAnyUser({name: "nombre2", surname: "apellidos2", display_name: "display2", email: "email2@gmail.com", phone: "123 456 789", passwd: password, rol: 0, points: 5, organization: "ULPGC", time_stamp: "17/03/2022 12:13:25"});
        let updateData = {
            id: 1,
            name: "nombre3",
            surname: "apellidos3",
            display_name: "display3",
            email: "email1@gmail.com",
            phone: '987654321',
            passwd: password2,
            rol: 1,
            points: 47,
            organization: "ULL",
        };

        await appAgent.put("/api/users").send(updateData);
        let results = await testSetupContents().getAnyUser({name: "nombre3", surname: "apellidos3"});
        assert.equal(results[0].NAME, "nombre3");
        assert.equal(results[0].SURNAME, "apellidos3");
        assert.equal(results[0].DISPLAY_NAME, "display3");
        assert.equal(results[0].EMAIL, "email1@gmail.com");
        assert.equal(results[0].PHONE, '987654321');
        assert.equal(results[0].PASSWD, password2);
        assert.equal(results[0].ROL, 1);
        assert.equal(results[0].POINTS, 47);
        assert.equal(results[0].ORGANIZATION, "ULL");
    });
});