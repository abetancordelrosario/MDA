let repoAbstractFactory = require("../../infrastructure/repositories/repoAbstractFactory.js"),
    getUser = require("./getUser.js");

let queriesFactory =
{
    getUser: function()
    {
        let action = getUser(getConnectionProvider());
        return action
    }
};

function getConnectionProvider()
{
    return repoAbstractFactory.getConnectionProvider();
}

module.exports = queriesFactory;