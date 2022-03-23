let express = require("express"),
    router = express.Router(),
    queriesFactory = require("../business/queries/queriesFactory"),
    commandsFactory = require("../business/commands/commandsFactory");

router.route("/")
.get(function(request, response){
    anyUserInfo = request.body
    queriesFactory.getUser().execute(anyUserInfo)
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})
.post(function(request, response){
    anyUserInfo = request.body
    commandsFactory.insertUser().execute(anyUserInfo)
    .then(function(result) {
        response.status(200).send("Is OK")
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})
.delete(function(request, response){
    anyUserId = request.body
    commandsFactory.deleteUser().execute(anyUserId)
    .then(function(result) {
        response.status(200).send("Is OK")
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
});

module.exports = router