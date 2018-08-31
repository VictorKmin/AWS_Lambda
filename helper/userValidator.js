const idV1 = require('uuid/v1');
module.exports = (body,method) => {

    console.log(body);
    let firstName = body.firstName;
    let lastName = body.lastName;
    let email = body.email;
    let user = {};

    if (!firstName) throw new Error('Please enter first name');
    if (!lastName) throw new Error('Please enter last name');
    if (!email) throw new Error('Please enter email');

    if (method === "POST") {
        user.id = idV1();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email= email;

        return user;
    } else {
        if (!id) throw new Error('Please enter id');

        user.id = body.id;
        user.firstName = firstName;
        user.lastName = lastName;
        user.email= email;

        return user;
    }
};