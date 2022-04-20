let repoAbstractFactory = require("../../infrastructure/repositories/repoAbstractFactory.js")
    insertUser = require("./insertUser.js");
    deleteUser = require("./deleteUser.js");
    updateUser = require("./updateUser.js");
    insertMessage = require("./insertMessage.js");
    insertResponse = require("./insertResponse.js");

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
    },

    insertMessage: function()
    {
        let action = insertMessage(getConnectionProvider());
        return action;
    },

    insertResponse: function()
    {
        let action = insertResponse(getConnectionProvider());
        return action;
    }

};

function getConnectionProvider()
{
    return repoAbstractFactory.getConnectionProvider();
}

module.exports = commandsFactory;