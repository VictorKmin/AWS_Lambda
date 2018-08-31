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
            },
            {
                AttributeName: 'firstName',
                AttributeType: 'S',
            }
        ],
        GlobalSecondaryIndexes: [
            {
                "IndexName": "FirstNameIndex",
                "KeySchema": [
                    {
                        "AttributeName": "firstName",
                        "KeyType": "HASH"
                    }
                ],
                "Projection": {
                    "ProjectionType": "ALL"
                },
                "ProvisionedThroughput": {
                    "ReadCapacityUnits": 1,
                    "WriteCapacityUnits": 1,
                }
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10,
        },
    };

    dynamo.createTable(params, function (err, data) {
        // console.log(err.message);
        // console.log(data);
        if (err) JSON.stringify(err.message); // an error occurred
        else JSON.stringify(data); // successful response
    });
};

