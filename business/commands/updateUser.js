let updateUser = function(connectionProvider)
{
    return {
        execute: function(updateData)
        {
            return new Promise(function(resolve, reject)
            {
                updateUserQuery(connectionProvider, updateData)
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

function updateUserQuery(connectionProvider, updateData)
{
    return new Promise(function(resolve, reject)
    {
        // let sqlQuery = "UPDATE users SET NAME = ?, SURNAME = ?, DISPLAY_NAME = ?, EMAIL = ?, PHONE = ?, PASSWD = ?, ROL = ?, POINTS = ?, ORGANIZATION = ? WHERE ID=?" 
        // connectionProvider.query(sqlQuery, [updateData.name, updateData.surname, updateData.display_name, updateData.email, updateData.phone, updateData.passwd, updateData.rol, updateData.points, updateData.organization, updateData.id],
        let sqlQuery = "UPDATE users SET PASSWD = ? WHERE NAME = ?"
        connectionProvider.query(sqlQuery, [updateData.passwd, updateData.name],
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


module.exports = updateUser;