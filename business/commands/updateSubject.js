let updateSubject = function(connectionProvider)
{
    return {
        execute: function(updateData)
        {
            return new Promise(function(resolve, reject)
            {
                updateSubjectQuery(connectionProvider, updateData)
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

function updateSubjectQuery(connectionProvider, updateData)
{
    return new Promise(function(resolve, reject)
    {
        let sqlQuery = "UPDATE subjects SET NAME = ?, UNIVERSITY = ?, FACULTY = ? WHERE ID=?" 
        connectionProvider.query(sqlQuery, [updateData.name, updateData.university, updateData.faculty, updateData.id],
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


module.exports = updateSubject;