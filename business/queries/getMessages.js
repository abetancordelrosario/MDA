let getMessages = function(connectionProvider)
{
    return {
        execute: function(subjectId)
        {
            return new Promise(function(resolve, reject)
            {
                getMessagesQuery(connectionProvider, subjectId)
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

function getMessagesQuery(connectionProvider, subjectId)
{
    return new Promise(function(resolve, reject)
    {
        
        let sqlQuery = "SELECT MESSAGE FROM messages WHERE SUBJECTID=?";
        connectionProvider.query(sqlQuery, [subjectId],
            
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

module.exports = getMessages;