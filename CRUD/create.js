const dynamo = require('../helper/DBConnect');
module.exports = (id, name, email) => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: 'users',
            Item: {
                'id': id,
                'name': name,
                'email': email,
            }
        };
        dynamo.put(params, function (err, data) {
            if (err) return reject(err);
             resolve(data);
        });
    })
};