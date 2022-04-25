let insertSubject = function(connectionProvider)
{
    return {
        execute: function(subjectInfo)
        {
            return new Promise(function(resolve, reject)
            {
                insertSubjectQuery(connectionProvider, subjectInfo)
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

function insertSubjectQuery(connectionProvider, subjectInfo)
{
    return new Promise(function(resolve, reject)
    {        
        let repoTable = "subjects";
        let repoColumns = "NAME, UNIVERSITY, FACULTY";
        let sqlQuery = "INSERT INTO "+repoTable+" ("+repoColumns+") VALUES (?,?,?)";
        connectionProvider.query(sqlQuery, [subjectInfo.name, subjectInfo.university, subjectInfo.faculty],
            
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
module.exports = insertSubject;