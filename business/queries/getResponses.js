let getResponses = function(connectionProvider)
{
    return {
        execute: function(messageId)
        {
            return new Promise(function(resolve, reject)
            {
                getResponsesQuery(connectionProvider, messageId)
                .then(function(results)
                {
                    resolve(results);
                })
                .catch(function(error)
                {
                    reject(error);
                })
            })
        }
    }
}

function getResponsesQuery(connectionProvider, messageId)
{
    return new Promise(function(resolve, reject)
    {
        
        let sqlQuery = "SELECT RESPONSES FROM messages WHERE ID=?";
        connectionProvider.query(sqlQuery, [messageId],
            
            function(error, results)
            {
                if (error)
                {
                    reject(error);
                }
                else
                {
                    resolve(results);
                }
            })
    })
}

module.exports = getResponses;