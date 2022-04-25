let repoAbstractFactory = require("../../infrastructure/repositories/repoAbstractFactory.js"),
    getUser = require("./getUser.js");
    getMessages = require("./getMessages.js");
    getSubjects = require("./getSubjects.js");
    getResponses = require("./getResponses.js")
    
let queriesFactory =
{
    getUser: function()
    {
        let action = getUser(getConnectionProvider());
        return action
    },
    getMessages: function()
    {
        let action = getMessages(getConnectionProvider());
        return action
    },
    getSubjects: function()
    {
        let action = getSubjects(getConnectionProvider());
        return action
    },
    getResponses: function()
    {
        let action = getResponses(getConnectionProvider());
        return action
    }

};

function getConnectionProvider()
{
    return repoAbstractFactory.getConnectionProvider();
}

module.exports = queriesFactory;