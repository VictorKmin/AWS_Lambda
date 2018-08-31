const dynamo = require('../../helper/DBConnect');
module.exports = (validUser) => {
    const id = validUser.id;
    const firstName = validUser.firstName;
    const lastName = validUser.lastName;
    const email = validUser.email;
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
             resolve(data)
        });
    })
};