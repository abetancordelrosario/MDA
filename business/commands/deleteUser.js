let deleteUser = function(connectionProvider)
{
    return {
        execute: function(userInfo)
        {
            return new Promise(function(resolve, reject)
            {
                deleteUserQuery(connectionProvider, userInfo)
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


function deleteUserQuery(connectionProvider, userInfo)
{
    return new Promise(function(resolve, reject)
    {        
        let sqlQuery = "DELETE FROM users WHERE ID=?";
        connectionProvider.query(sqlQuery,[userInfo.ID],
            
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
module.exports = deleteUser;