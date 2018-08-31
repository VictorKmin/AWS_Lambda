const dynamo = require('../../helper/DBConnect');
module.exports = (id, fist, last, email) => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: "users",
            Key: {
                "id": id,
                "firstName": fist
            },
            UpdateExpression: "set lastName=:l, email=:e",
            ExpressionAttributeValues: {
                ":l": last,
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