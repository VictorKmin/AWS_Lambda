const dynamo = require('../helper/DBConnect');
module.exports = () => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: "users",
        };
        dynamo.scan(params, function (err, data) {
            if (err) return reject(err);
            resolve(data);
        });
    });
};