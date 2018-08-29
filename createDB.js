const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB({
    endpoint: 'http://localhost:8000',
    region: 'eu-west-3'
});

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
                AttributeName: 'id',
                AttributeType: 'N',
            },
            {
                AttributeName: 'name',
                AttributeType: 'S',
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10,
        },
    };

    dynamo.createTable(params, function (err, data) {
        if (err) JSON.stringify(err); // an error occurred
        else JSON.stringify(data); // successful response
    });
};

