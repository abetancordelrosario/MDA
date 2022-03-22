let repoAbstractFactory = require("../infrastructure/repositories/repoAbstractFactory.js");

const IS_TEST_ENV = true;

let testSetupContents = function()
{
    return {
        deleteRepositoryContent,
        givenAnyUser,
        getAnyUser
    };
};

function deleteRepositoryContent()
{
    return new Promise(function(resolve, reject)
    {
        let repoConnection = repoAbstractFactory.getConnectionProvider(IS_TEST_ENV);
        
        truncateMySQLTable("users", repoConnection)
        .then(function()
        {
            resolve();
        })
        .catch(function(error)
        {
            reject(error);
        });
    });
}

function truncateMySQLTable(repoTable, repoConnection)
{
    return new Promise(function(resolve, reject)
    {
        let connection = repoConnection;
        let sql = "TRUNCATE " + repoTable;
        connection.query(sql, function(error)
        {
            if (error)
            {
                reject(error);
            }
            else
            {   
                resolve();
            }
        });
    });
}

function givenAnyUser(contentInfo)
{
    return new Promise(function(resolve, reject)
    {
        let repoConnection = repoAbstractFactory.getConnectionProvider(IS_TEST_ENV);
        let repoTable = "users";
        let repoColumns = "NAME, SURNAME, DISPLAY_NAME, EMAIL, PHONE, PASSWD, ROL, POINTS, ORGANIZATION, TIME_STAMP";

        let sql = "INSERT INTO "+repoTable+" ("+repoColumns+") VALUES (?,?,?,?,?,?,?,?,?,?)";
        repoConnection.query(sql, [contentInfo.name, contentInfo.surname, contentInfo.display_name, contentInfo.email, contentInfo.phone, contentInfo.passwd, contentInfo.rol, contentInfo.points, contentInfo.organization, contentInfo.time_stamp], function(error)
        {
            if (error)
            {
                reject(error);
            }
            else
            {
                resolve();
            }
        });


    });
}

function getAnyUser(contentInfo)
{
    return new Promise(function(resolve, reject){
        let repoConnection = repoAbstractFactory.getConnectionProvider(IS_TEST_ENV);
        let repoTable = "users"
        
        let sql = "SELECT * FROM "+repoTable+" WHERE NAME=? AND SURNAME=?";
        repoConnection.query(sql, [contentInfo.name, contentInfo.surname], function(error, result)
        {
            if (error)
            {
                reject(error);
            }
            else
            {
                resolve(result);
            }
        });
    });
}

module.exports = testSetupContents;