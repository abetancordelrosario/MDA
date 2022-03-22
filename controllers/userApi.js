let express = require("express"),
    router = express.Router(),
    queriesFactory = require("../business/queries/queriesFactory"),
    commandsFactory = require("../business/commands/commandsFactory");

router.route("/")
.post(function(request, response){
    anyUserInfo = request.body
    commandsFactory.insertUser().execute(anyUserInfo)
    .then(function(result) {
        response.status(200).send("Is OK")
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
});

module.exports = router