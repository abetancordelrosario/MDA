let repoAbstractFactory = require("../../infrastructure/repositories/repoAbstractFactory.js")

let commandsFactory =
{
    
};

function getConnectionProvider(repository)
{
    return repoAbstractFactory.getConnectionProvider(repository);
}

module.exports = commandsFactory;