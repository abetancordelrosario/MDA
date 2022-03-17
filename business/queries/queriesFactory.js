let repoAbstractFactory = require("../../infrastructure/repositories/repoAbstractFactory.js")

let queriesFactory =
{
    
};

function getConnectionProvider(repository)
{
    return repoAbstractFactory.getConnectionProvider(repository);
}

module.exports = queriesFactory;