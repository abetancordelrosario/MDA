let insertMessage = function(connectionProvider)
{
    return {
        execute: function(messageInfo)
        {
            return new Promise(function(resolve, reject)
            {
                insertMessageQuery(connectionProvider, messageInfo)
                .then(function()
                {
                    resolve();
                })
                .catch(function(error)
                {
                    reject(error);
                })
            })
        }
    }
}


function insertMessageQuery(connectionProvider, messageInfo)
{
    return new Promise(function(resolve, reject)
    {
        let repoTable = "messages";
        let repoColumns = "SUBJECTID, USERID, TITLE, MESSAGE, RESPONSES";
        let sqlQuery = "INSERT INTO "+repoTable+" ("+repoColumns+") VALUES (?,?,?,?,?)";
        connectionProvider.query(sqlQuery, [messageInfo.subjectid, messageInfo.userid, messageInfo.title, messageInfo.message, messageInfo.responses],
            
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


module.exports = insertMessage;
