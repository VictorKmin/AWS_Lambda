const AWS = require('aws-sdk');

module.exports = () => {

    const dynamo = new AWS.DynamoDB({
        endpoint: 'http://localhost:8000',
        region: 'eu-west-3'
    });

    dynamo.listTables(function(err, data) {
        console.log(data);
        if (err) JSON.stringify(err); // an error occurred
        else return data; // successful response
    });
};