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
            }
        ],
        AttributeDefinitions: [
            {
                AttributeName: 'id',
                AttributeType: 'S',
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
        },
    };

    dynamo.createTable(params, function (err, data) {
        if (err) JSON.stringify(err); // an error occurred
        else JSON.stringify(data); // successful response
    });
};

