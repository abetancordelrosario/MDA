let updateUserPoints = function(connectionProvider)
{
    return {
        execute: function(pointsInfo)
        {
            return new Promise(function(resolve, reject)
            {
                updateUserPointsQuery(connectionProvider, pointsInfo)
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

function updateUserPointsQuery(connectionProvider, pointsInfo)
{
    return new Promise(function(resolve, reject)
    {
        let sqlQuery = "UPDATE users SET POINTS = ? WHERE ID=?"
        let pointsToModify = 0;
        if (pointsInfo.type === "add") {
            pointsToModify = parseInt(pointsInfo.userPoints) + 1;
        } 

        if (pointsInfo.type === "subtract") {
            pointsToModify = parseInt(pointsInfo.userPoints);
        }

        connectionProvider.query(sqlQuery, [pointsToModify, pointsInfo.userId],
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


module.exports = updateUserPoints;