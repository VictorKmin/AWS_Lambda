const dynamo = require('../helper/DBConnect');
module.exports = (id) => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: "users",
            Key: {
                "firstName": 'itsMyname',
            }
        };
        dynamo.get(params, function (err, data) {
            if (err) return reject(err);
            resolve(data);
        });
    });
};