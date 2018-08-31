const dynamo = require('../../helper/DBConnect');
module.exports = (id) => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: "users",
            Key: {
                "id": id,
            }
        };
        dynamo.get(params, function (err, data) {
            if (err) return reject(err);
            console.log(data);
            return resolve(data.Item);
        });
    });
};