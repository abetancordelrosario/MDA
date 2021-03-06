let insertResponse = function(connectionProvider)
{
    return {
        execute: function(responseInfo)
        {
            return new Promise(function(resolve, reject)
            {
                getResponses(connectionProvider, responseInfo)
                .then(function(results)
                {
                    let responses = results;
                    let messageResponse = {
                        id: 1,
                        text: responseInfo.response
                    }

                    if (responses.length > 0) {
                        let lastResponse = Math.max.apply(Math, responses.map(function(o) { return o.response; }));
                        messageResponse = {
                            id: lastResponse + 1,
                            text: responseInfo.response
                        }

                    }
                    responses.push(messageResponse);

                    insertResponseQuery(connectionProvider, responseInfo.messageid, responses)
                    .then(function(results) {

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


function insertResponseQuery(connectionProvider, messageid, responses)
{
    return new Promise(function(resolve, reject)
    {
        let repoTable = "messages";
        let sqlQuery = "UPDATE "+repoTable+" SET RESPONSES=? WHERE ID=?";
        connectionProvider.query(sqlQuery, [JSON.stringify(responses), messageid],
            
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

function getResponses(connectionProvider, responseInfo)
{
    return new Promise(function(resolve, reject)
    {
        let repoTable = "messages";
        let sqlQuery = "SELECT RESPONSES FROM "+repoTable+" WHERE ID=?";
        connectionProvider.query(sqlQuery, [responseInfo.messageid],
            
        function(error, results)
        {
            if (error)
            {
                reject(error);
            }
            else
            {
                let responses = (results[0].length && results[0].length > 0) ? JSON.parse(results[0].RESPONSES) : [];
                resolve(responses);
            }
        })
    })
}


module.exports = insertResponse;
