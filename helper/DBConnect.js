const AWS = require('aws-sdk');

AWS.config.update({
    region: "eu-west-3",
    endpoint: "http://localhost:8000"
});
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports = dynamo;