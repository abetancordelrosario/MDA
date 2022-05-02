let insertUser = function(connectionProvider)
{
    return {
        execute: function(userInfo)
        {
            return new Promise(function(resolve, reject)
            {
                insertUserQuery(connectionProvider, userInfo)
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


function insertUserQuery(connectionProvider, userInfo)
{
    return new Promise(function(resolve, reject)
    {
        let repoTable = "users";
        let repoColumns = "NAME, SURNAME, DISPLAY_NAME, EMAIL, PHONE, PASSWD, ROL, POINTS, ORGANIZATION, TIME_STAMP";
        let sqlQuery = "INSERT INTO "+repoTable+" ("+repoColumns+") VALUES (?,?,?,?,?,?,?,?,?,?)";
        connectionProvider.query(sqlQuery, [userInfo.name, userInfo.surname, userInfo.display_name, userInfo.email, userInfo.phone, userInfo.passwd, userInfo.rol, 0, userInfo.organization, userInfo.time_stamp],
            
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


module.exports = insertUser;
