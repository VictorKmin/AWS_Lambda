const dynamo = require('../helper/DBConnect');
module.exports = (id, name, email) => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: "users",
            Key: {
                "id": id,
            },
            UpdateExpression: "set name=:n, email=:e",
            ExpressionAttributeValues: {
                ":n": name,
                ":e": email
            },
            ReturnValues: "UPDATED_NEW"
        };
        dynamo.update(params, function (err, data) {
            if (err) return reject(err);
            resolve(data)
        });
    })
};