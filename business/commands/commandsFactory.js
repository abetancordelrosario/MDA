let repoAbstractFactory = require("../../infrastructure/repositories/repoAbstractFactory.js")
    insertUser = require("./insertUser.js");

let commandsFactory =
{
    insertUser: function()
    {
        let action = insertUser(getConnectionProvider());
        return action;
    }
};

function getConnectionProvider()
{
    return repoAbstractFactory.getConnectionProvider();
}

module.exports = commandsFactory;