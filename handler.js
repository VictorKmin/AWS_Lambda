'use strict';
const AWS = require('aws-sdk');
AWS.config.update({
    region: "eu-west-3",
    endpoint: "http://localhost:8000"
});

const getTables = require('./allTables');
const createDB = require('./createDB');
const dynamo = new AWS.DynamoDB.DocumentClient();
module.exports.hello = (event, context, callback) => {
    const resp = {
        statusCode: 200,
        body: JSON.stringify({
            event: 'Hello'
        })
    };
    callback(null, resp)
};
module.exports.create = (event, context, callback) => {

    let params = {
        TableName: 'users',
        Item: {
            'id': '1',
            'name': 'Richard Roe'
        }
    };
    dynamo.put(params, function (err, data) {
        if (err) console.log(JSON.stringify(err, null, 2));
        else {
            const resp = {
                statusCode: 200,
                body: JSON.stringify({
                    event: data
                })
            };
            callback(null, resp)
        }
    });
};

module.exports.getAll = async (event, context, callback) => {

    let params = {
        TableName: "users",
        Key: {
            "id": '1',
            'name': 'Richard Roe'
        }
    };
    dynamo.get(params, (err, data) => {
        if (err) console.log(err);
        else {
            const resp = {
                statusCode: 200,
                body: JSON.stringify({
                    event: data
                })
            };
            callback(null, resp)
        }
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
