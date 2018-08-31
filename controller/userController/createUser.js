const dynamo = require('../../helper/DBConnect');
module.exports = (id, firstName, lastName, email) => {
    return new Promise((resolve, reject) => {
        const params = {
            TableName: 'users',
            Item: {
                'id': id,
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
            }
        };
        dynamo.put(params, function (err, data) {
            if (err) return reject(err);
           return resolve(data)
        });
    })
};