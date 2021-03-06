const dynamo = require('../../helper/DBConnect');
module.exports = (id, fist, last, email) => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: "users",
            Key: {
                "id": id
            },
            UpdateExpression: "set firstName=:f, lastName=:l, email=:e",
            ExpressionAttributeValues: {
                ":f": fist,
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