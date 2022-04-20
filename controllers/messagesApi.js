let express = require("express"),
    router = express.Router(),
    queriesFactory = require("../business/queries/queriesFactory"),
    commandsFactory = require("../business/commands/commandsFactory");

router.route("/response")
.post(function(request, response){
    
    let responseInfo = request.body;
    commandsFactory.insertResponse().execute(responseInfo)
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})

router.route("/")
.get(function(request, response){
    
    let subjectid = request.query.subjectid;
    queriesFactory.getMessages().execute(subjectid)
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})
.post(function(request, response){
    
    let messageInfo = request.body;
    commandsFactory.insertMessage().execute(messageInfo)
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})
.delete(function(request, response){
    
    let messageId = request.body.id;
    commandsFactory.deleteMessage().execute(messageId)
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
});

module.exports = router