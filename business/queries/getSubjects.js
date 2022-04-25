let getSubjects = function(connectionProvider)
{
    return {
        execute: function()
        {
            return new Promise(function(resolve, reject)
            {
                getSubjectsQuery(connectionProvider)
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

function getSubjectsQuery(connectionProvider)
{
    return new Promise(function(resolve, reject)
    {
        
        let sqlQuery = "SELECT * FROM Subjects";
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

module.exports = getSubjects;