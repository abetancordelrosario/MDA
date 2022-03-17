let mysql = require("mysql");

let repoAbstractFactory = {
    getConnectionProvider: function(isTestEnv)
    {
        return getSingleConnectionProvider(isTestEnv);
    }
};

let singletonConnectionProvider;

function getSingleConnectionProvider(isTestEnv)
{
    require("dotenv").config();

    const TEST_PORT = 4646;
    
        if (!singletonConnectionProvider)
        {
            let database = 'mda';
            database += (isTestEnv || process.env.PORT == TEST_PORT) ? "_test" : "_dev";

            singletonConnectionProvider = mysql.createPool({
                host     : 'localhost',
                user     : 'root',
                password : '',
                database : database,
                multipleStatements: true
            });

        return singletonConnectionProvider;
    }

} 

module.exports = repoAbstractFactory;