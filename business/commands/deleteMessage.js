let deleteMessage = function(connectionProvider)
{
    return {
        execute: function(messageId)
        {
            return new Promise(function(resolve, reject)
            {
                deleteMessageQuery(connectionProvider, messageId)
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


function deleteMessageQuery(connectionProvider, messageId)
{
    return new Promise(function(resolve, reject)
    {        
        let sqlQuery = "DELETE FROM messages WHERE ID=?";
        connectionProvider.query(sqlQuery,[messageId],
            
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
module.exports = deleteMessage;