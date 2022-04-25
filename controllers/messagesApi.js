let express = require("express"),
    router = express.Router(),
    queriesFactory = require("../business/queries/queriesFactory"),
    commandsFactory = require("../business/commands/commandsFactory");

router.route("/response")
.get(function(request, response){
    
    let messageid = request.query.messageid;
    queriesFactory.getResponses().execute(messageid)
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})
.post(function(request, response){
    
    let responseInfo = request.body;
    commandsFactory.insertResponse().execute(responseInfo)
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})
.delete(function(request, response){
    
    let responseToDelete = request.body;
    commandsFactory.deleteResponse().execute(responseToDelete)
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
});

router.route("/")
.get(function(request, response){
    
    let params = request.query;
    let filters = {
        subjectid: params.subjectid,
        id: params.id
    }
    queriesFactory.getMessages().execute(filters)
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