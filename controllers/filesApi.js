const commandsFactory = require("../business/commands/commandsFactory.js");

let express = require("express"),
    router = express.Router();
    upload = require("express-fileupload");
    fs = require("fs");
    path = require('path');


router.route("/")
.get(function(request, response){
    var subject = request.query.subject;
    var dir = __dirname.replace("controllers","client\\public\\documents\\").replace(/\\/g, "/") + subject;

    fs.readdir(dir, function (err, files) {
        if (err) {
            response.status(400).send("Error:" +err.message)
        } 
        response.status(200).send(files);
    });

})
.post(function(request, response){
    var file;
    var subject = request.query.subject;
    var userId = request.query.userId;
    var userPoints = request.query.userPoints;

    if(!request.files)
    {
        response.send("File was not found");
        return;
    }
    
    var file = request.files.File;
    var fileName = file.name;
    var dir = __dirname.replace("controllers","client\\public\\documents\\").replace(/\\/g, "/") + subject + "/" + fileName;

    file.mv(dir, function(error) {
        if (error) {
            response.send(error)
        } else {
            let pointsInfo = {
                userId: userId,
                type: "add",
                userPoints: userPoints
            }
            commandsFactory.updateUserPoints().execute(pointsInfo)
            .then(function(result) {
                response.status(200).send("File Uploaded");
            }).catch(function(error) {
                response.status(400).send("Error:" +error.message)
            })
        }
    })

})

module.exports = router