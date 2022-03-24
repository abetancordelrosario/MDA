const queriesFactory = require("../../../business/queries/queriesFactory.js");

let assert = require("chai").assert,
    testSetupContents = require("../../testSetupContents.js"),
    md5 = require("md5"),
    commandFactory = require("../../../business/commands/commandsFactory.js");

describe ("Business / Command / User", function()
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
    it("Should update user info", async() =>
    {
        const password = md5("1234");
        const password2 = md5("4321");
        await testSetupContents().givenAnyUser({name: "nombre1", surname: "apellidos1", display_name: "display1", email: "email1@gmail.com", phone: "123 456 789", passwd: password, rol: 0, points: 5, organization: "ULPGC", time_stamp: "17/03/2022 12:13:25"});
        await testSetupContents().givenAnyUser({name: "nombre2", surname: "apellidos2", display_name: "display2", email: "email2@gmail.com", phone: "123 456 789", passwd: password, rol: 0, points: 5, organization: "ULPGC", time_stamp: "17/03/2022 12:13:25"});
        let updateData = {
            name: "nombre3",
            surname: "apellidos3",
            display_name: "display3",
            phone: "987 654 321",
            passwd: password2,
            organization: "ULL"
        };
        
        await commandFactory.updateUser().execute(updateData);
        let results = await testSetupContents().getAnyUser({name: "nombre3", surname: "apellidos3"});

        assert.equal(results.name, "nombre3");
        assert.equal(results.surname,"apellidos3");
        assert.equal(results.display_name, "display3");
        assert.equal(results.phone, "987 654 321");
        assert.equal(results.passwd, password2);
        assert.equal(results.organization, "ULL");

    });

});