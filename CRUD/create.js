const dynamo = require('../helper/DBConnect');
module.exports = (id, first, last, email) => {
    return new Promise((resolve, reject) => {
        let params = {
            TableName: 'users',
            Item: {
                'id': id,
                'firstName': first,
                'lastName': last,
                'email': email,
            }
        };
        dynamo.put(params, function (err, data) {
            if (err) return reject(err);
             resolve(data)
        });
    })
};