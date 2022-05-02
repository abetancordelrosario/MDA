let getUser = function(connectionProvider)
{
    return {
        execute: function(userInfo)
        {
            return new Promise(function(resolve, reject)
            {
                getUserQuery(connectionProvider, userInfo)
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

function getUserQuery(connectionProvider, userInfo)
{
    return new Promise(function(resolve, reject)
    {
        
        let sqlQuery = "SELECT ID, NAME, SURNAME, EMAIL, PHONE, POINTS FROM users WHERE DISPLAY_NAME=? AND PASSWD=?";
        connectionProvider.query(sqlQuery, [userInfo.display_name, userInfo.passwd],
            
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

module.exports = getUser;