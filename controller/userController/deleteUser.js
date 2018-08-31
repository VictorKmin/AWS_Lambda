const dynamo = require('../../helper/DBConnect');
module.exports = (id) => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: "users",
            Key: {
                "id": id,
            }
        };
        dynamo.delete(params, function (err, data) {
            if (err) return reject(err);
            resolve(data)
        });
    })
};
