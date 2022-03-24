let repoAbstractFactory = require("../../infrastructure/repositories/repoAbstractFactory.js")
    insertUser = require("./insertUser.js");
    deleteUser = require("./deleteUser.js");
    updateUser = require("./updateUser.js");

let commandsFactory =
{
    insertUser: function()
    {
        let action = insertUser(getConnectionProvider());
        return action;
    },

    deleteUser: function()
    {
        let action = deleteUser(getConnectionProvider());
        return action;
    },

    updateUser: function()
    {
        let action = updateUser(getConnectionProvider());
        return action;
    }

};

function getConnectionProvider()
{
    return repoAbstractFactory.getConnectionProvider();
}

module.exports = commandsFactory;