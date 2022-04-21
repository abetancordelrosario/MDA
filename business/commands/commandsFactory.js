let repoAbstractFactory = require("../../infrastructure/repositories/repoAbstractFactory.js")
    insertUser = require("./insertUser.js");
    deleteUser = require("./deleteUser.js");
    deleteMessage = require("./deleteMessage.js");
    deleteResponse = require("./deleteResponse.js");
    deleteSubject = require("./deleteSubject.js")
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

    deleteMessage: function()
    {
        let action = deleteMessage(getConnectionProvider());
        return action;
    },

    deleteResponse: function()
    {
        let action = deleteResponse(getConnectionProvider());
        return action;
    },

    deleteSubject: function()
    {
        let action = deleteSubject(getConnectionProvider());
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