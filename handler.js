//To start DB
//java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
//To deleteDB
//aws dynamodb delete-table --table-name users

//TODO TEST DELETE USER
'use strict';
const sorter = require('./routes/routerSorter');
const resp = require('./helper/responseObject');

module.exports.globalRouter = async (event, context, callback) => {
    try {
        const method = event.httpMethod;
        const url = event.pathParameters.any;
        const body = JSON.parse(event.body);
        const isSuccess = await sorter(method, url, body);
        callback(null, isSuccess);

    } catch (e) {
        const r = resp(200, {success: false, message: e.message});
        callback(null, r)
    }
};