let deleteResponse = function(connectionProvider)
{
    return {
        execute: function(responseToDelete)
        {
            return new Promise(function(resolve, reject)
            {
                getResponses(connectionProvider, responseToDelete)
                .then(function(results)
                {
                    let responses = results;
                    if (responses.length < 0) {
                        resolve();
                    }

                    var responsesParsed = responses.filter(function(el) { return el.id != responseToDelete.id; });
                    updateResponseQuery(connectionProvider, responsesParsed, responseToDelete.messageid)
                    .then(function()
                    {
                        resolve();
                    })
                    .catch(function(error)
                    {
                        reject(error);
                    })
                })
                .catch(function(error)
                {
                    reject(error);
                })
            })
        }
    }
}


function updateResponseQuery(connectionProvider, responseToDelete, messageid)
{
    return new Promise(function(resolve, reject)
    {        
        let repoTable = "messages";
        let sqlQuery = "UPDATE "+repoTable+" SET RESPONSES=? WHERE ID=?";
        connectionProvider.query(sqlQuery, [JSON.stringify(responseToDelete), messageid],
            
        function(error)
        {
            if (error)
            {
                reject(error);
            }
            else
            {
                resolve();
            }
        })
    })
}

function getResponses(connectionProvider, responseToDelete)
{
    return new Promise(function(resolve, reject)
    {
        let repoTable = "messages";
        let sqlQuery = "SELECT RESPONSES FROM "+repoTable+" WHERE ID=?";
        connectionProvider.query(sqlQuery, [responseToDelete.messageid],
            
        function(error, results)
        {
            if (error)
            {
                reject(error);
            }
            else
            {
                let responses = (results.length && results.length > 0) ? JSON.parse(results[0].RESPONSES) : [];
                resolve(responses);
            }
        })
    })
}

module.exports = deleteResponse;