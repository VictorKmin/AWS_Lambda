const dynamo = require('../../helper/DBConnect');
module.exports = (name) => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: "users",
            IndexName: "FirstNameIndex",
            KeyConditionExpression: {
                "firstName": name,
            }
        };
        dynamo.query(params, function (err, data) {
            console.log(err);
            if (err) return reject(err);
            resolve(data);
        });
    });
};

// $ aws dynamodb query \
//     --table-name UserOrdersTable \
//     --index-name UserAmountIndex \
//     --key-condition-expression "Username = :username AND Amount > :amount" \
//     --expression-attribute-values '{
// ":username": { "S": "daffyduck" },
// ":amount": { "N": "100" }
// }' \