let express = require("express"),
    router = express.Router(),
    queriesFactory = require("../business/queries/queriesFactory"),
    commandsFactory = require("../business/commands/commandsFactory");

router.route("/")
.get(function(request, response){
    
    let subjectid = request.query.subjectid;
    queriesFactory.getMessages().execute(subjectid)
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
});

module.exports = router