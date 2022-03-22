let assert = require("chai").assert,
    testSetupContents = require("../../testSetupContents.js"),
    md5 = require("md5"),
    queriesFactory = require("../../../business/commands/commandsFactory.js");

describe ("Business / Queries / User", function()
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
        
        await queriesFactory.insertUser().execute(anyUserInfo);
        let results = await testSetupContents().getAnyUser({name: "nombre1", surname: "apellidos1"});

        assert.equal(results[0].NAME, "nombre1");
        assert.equal(results[0].PASSWD, password);
    })
});