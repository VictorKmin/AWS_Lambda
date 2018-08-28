'use strict';

const AWS = require('aws-sdk');
const getTables = require('./allTables');
const createDB = require('./createDB');
const dynamo = new AWS.DynamoDB.DocumentClient({
    endpoint: 'http://localhost:8000',
    region: 'eu-west-3'
});
module.exports.hello = (event, context, callback) => {
    const resp = {
        statusCode: 200,
        body: JSON.stringify({
            event: 'Hello'
        })
    };
    callback(null, resp)
};
module.exports.getAll = async (event, context, callback) => {

    let params = {
        TableName: "users",
        KeyConditionExpression: "#id = :id",
        ExpressionAttributeValues: {
            "#id": '1'
        }
    };
    dynamo.query(params, (err, data) => {
        if (err) console.log(err);
        else console.log(data);
    });
};
module.exports.createTable = (event, context, callback) => {
    const resp = {
        statusCode: 200,
        body: JSON.stringify({
            event: createDB()
        })
    };
    callback(null, resp)
};
module.exports.getTables = (event, context, callback) => {
    const resp = {
        statusCode: 200,
        body: JSON.stringify({
            event: getTables()
        })
    };
    callback(null, resp)
};
module.exports.create = (event, context, callback) => {

    let params = {
        TableName: 'users',
        Item: {
            'id': {N: '001'},
            'name': {S: 'Richard Roe'},
        }
    };

    dynamo.putItem(params, function (err, data) {
        if (err) console.log(err);
        else console.log(data);
    });

    callback(null, 'AWS GO TO HELL')
};