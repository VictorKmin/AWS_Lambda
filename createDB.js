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
        LocalSecondaryIndexes: [
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
                }
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10,
        },
    };

    dynamo.createTable(params, function (err, data) {
        console.log(err);
        console.log(data);
        if (err) JSON.stringify(err); // an error occurred
        else JSON.stringify(data); // successful response
    });
};

