const { Console } = require("console");

let assert = require("chai").assert,
    testSetupContents = require("../../testSetupContents.js"),
    md5 = require("md5"),
    moment = require("moment"),
    queriesFactory = require("../../../business/queries/queriesFactory.js");

describe("Business / Queries / Messages", function()
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

    it("Should return a message for a specified subject", async() =>
    {
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba"});
        let filters = {
            subjectid: 1
        }
        
       
        const results = await queriesFactory.getMessages().execute(filters);
        
        assert.equal(results[0].MESSAGE, "Mensaje de Prueba");
    });

    it("Should return all messages for a specified subject", async() =>
    {
        var fecha = (new Date(Date.now())).toISOString();
        var fechaFinal = moment(fecha).format('DD-MM-YYYY HH:mm:ss');
        let response = [
            {
                messageid: 1,
                response:"Pues la verdad si",
                time_stamp: fechaFinal
            }
        ]
        JSON.stringify(response);
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 1, message: "Mensaje de Prueba", time_stamp:"2022-03-24 12:13:25",responses: JSON.stringify(response)});
        await testSetupContents().givenAnyMessage({subjectid: 1, userid: 2, message: "Mensaje de Prueba 2"});
        await testSetupContents().givenAnyMessage({subjectid: 2, userid: 3, message: "Mensaje de Prueba 3"});
        let filters = {
            subjectid: 1
        }
        
        const results = await queriesFactory.getMessages().execute(filters);


        assert.equal(results.length, 2);
        assert.equal(results[0].MESSAGE, "Mensaje de Prueba");
        // console.log(JSON.parse(results[0].RESPONSES));
        assert.equal(results[1].MESSAGE, "Mensaje de Prueba 2");
    });
});