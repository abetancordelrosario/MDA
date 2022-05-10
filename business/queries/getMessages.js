let getMessages = function(connectionProvider)
{
    return {
        execute: function(filters)
        {
            return new Promise(function(resolve, reject)
            {
                getMessagesQuery(connectionProvider, filters)
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

function getMessagesQuery(connectionProvider, filters)
{
    return new Promise(function(resolve, reject)
    {
        
        let sqlQuery = "SELECT ID, USERID, TITLE, MESSAGE, RESPONSES, TIME_STAMP FROM messages WHERE ";
        if (filters.subjectid) {
            sqlQuery += "SUBJECTID=" + filters.subjectid;
        }
        if (filters.id) {
            sqlQuery += "ID=" + filters.id
        }

        connectionProvider.query(sqlQuery,
            
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