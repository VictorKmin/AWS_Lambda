const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB({
    endpoint: 'http://localhost:8000',
    region: 'eu-west-3'
});
let isTableCreate = null;

module.exports = () => {

    const params = {
        TableName: 'users',
        KeySchema: [
            {
                AttributeName: 'id',
                KeyType: 'HASH'
            }, {
                AttributeName: 'name',
                KeyType: 'RANGE'
            }
        ],
        AttributeDefinitions: [
            {
                AttributeName: 'name',
                AttributeType: 'S',
            }, {
                AttributeName: 'id',
                AttributeType: 'N',
            },

        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10,
        },
    };

    dynamo.createTable(params, function (err, data) {
        if (err) isTableCreate = JSON.stringify(err); // an error occurred
        else isTableCreate = JSON.stringify(data); // successful response
    });
};

