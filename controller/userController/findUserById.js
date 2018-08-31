const dynamo = require('../../helper/DBConnect');
module.exports = (id) => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: "users",
            Key: {
                "id": "cf856130-acf5-11e8-abaa-9d00bdd9e21f",
                "firstName": 'someNdhddame',
            }
        };
        dynamo.get(params, function (err, data) {
            if (err) return reject(err);
            resolve(data);
        });
    });
};