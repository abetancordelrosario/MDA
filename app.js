let express = require("express"),
    app = express();

let port = process.env.PORT || 3636;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function () {
    console.log("Running on PORT: " + port);
});

module.exports = app;