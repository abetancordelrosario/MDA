let express = require("express"),
    app = express(),
    userApi = require("./controllers/userApi");

let port = process.env.PORT || 3636;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userApi);

app.listen(port, function () {
    console.log("Running on PORT: " + port);
});

module.exports = app;