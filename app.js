let express = require("express"),
    app = express(),
    userApi = require("./controllers/userApi");
    messagesApi = require("./controllers/messagesApi");
    subjectsApi= require("./controllers/subjectsApi")

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

let port = process.env.PORT || 3636;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userApi);
app.use("/api/messages", messagesApi);
app.use("/api/subjects", subjectsApi);




app.listen(port, function () {
    console.log("Running on PORT: " + port);
});

module.exports = app;