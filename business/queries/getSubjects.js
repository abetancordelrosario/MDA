let getSubjects = function(connectionProvider)
{
    return {
        execute: function(subjectId)
        {
            return new Promise(function(resolve, reject)
            {
                getSubjectsQuery(connectionProvider, subjectId)
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

function getSubjectsQuery(connectionProvider, subjectId)
{
    return new Promise(function(resolve, reject)
    {
        
        let sqlQuery = "SELECT * FROM Subjects";

        if (subjectId) {
            sqlQuery+=" WHERE ID=" + subjectId;
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

module.exports = getSubjects;