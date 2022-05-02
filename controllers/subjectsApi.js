let express = require("express"),
    router = express.Router(),
    queriesFactory = require("../business/queries/queriesFactory"),
    commandsFactory = require("../business/commands/commandsFactory");
    
router.route("/")
.get(function(request,response){
    let subjectId = request.params.subjectId;
    queriesFactory.getSubjects().execute(subjectId)
    .then(function(result) {
        response.status(200).send(result);
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})

.delete(function(request, response){
    
    anySubjectId = request.body;
    commandsFactory.deleteSubject().execute(anySubjectId)
    .then(function(result) {
        response.status(200).send("Is OK")
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})

.post(function(request, response){
    
    anySubjectId = request.body;
    commandsFactory.insertSubject().execute(anySubjectId)
    .then(function(result) {
        response.status(200).send("Is OK")
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})

.put(function(request, response){
    
    updateSubjectData = request.body;
    commandsFactory.updateSubject().execute(updateSubjectData)
    .then(function(result) {
        response.status(200).send("Is OK")
    }).catch(function(error) {
        response.status(400).send("Error:" +error.message)
    })
})

module.exports = router