let express = require("express"),
    router = express.Router(),
    queriesFactory = require("../business/queries/queriesFactory"),
    commandsFactory = require("../business/commands/commandsFactory");
    
router.route("/")
.get(function(request,response){
    queriesFactory.getSubjects().execute()
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})

.delete(function(request, response){
    anySubjectId = request.body.id;
    console.log(anySubjectId);
    commandsFactory.deleteSubject().execute(anySubjectId)
    .then(function(result) {
        response.status(200).send("Is OK").send(result)
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})

module.exports = router