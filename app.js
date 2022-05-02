let express = require("express"),
    app = express(),
    fileupload = require("express-fileupload"),
    userApi = require("./controllers/userApi");
    messagesApi = require("./controllers/messagesApi");
    subjectsApi= require("./controllers/subjectsApi");
    filesApi= require("./controllers/filesApi");

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

let port = process.env.PORT || 3636;


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(fileupload());
app.use("/api/users", userApi);
app.use("/api/messages", messagesApi);
app.use("/api/subjects", subjectsApi);
app.use("/api/files", filesApi);




app.listen(port, function () {
    console.log("Running on PORT: " + port);
});

module.exports = app;