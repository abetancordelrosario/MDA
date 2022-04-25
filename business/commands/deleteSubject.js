let deleteSubject = function(connectionProvider)
{
    return {
        execute: function(subjectInfo)
        {
            return new Promise(function(resolve, reject)
            {
                deleteSubjectQuery(connectionProvider, subjectInfo)
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


function deleteSubjectQuery(connectionProvider, subjectInfo)
{
    return new Promise(function(resolve, reject)
    {        
        let sqlQuery = "DELETE FROM subjects WHERE ID=?";
        connectionProvider.query(sqlQuery,[subjectInfo.ID],
            
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
module.exports = deleteSubject;