const idV1 = require('uuid/v1');
const readOne = require('../controller/userController/findUserById');
module.exports = (body,method) => {

    let firstName = body.firstName;
    let lastName = body.lastName;
    let email = body.email;
    let id = body.id;
    let user = {};

    if (method === "POST") {
        //FirstName check
        if (!firstName) throw new Error('please enter first name');
        //LastName check
        if (!lastName) throw new Error('please enter last name');
        //Email check
        if (!email) throw new Error('please enter email');

        user.id = idV1();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email= email;

        return user;
    } else {
        if (!id) throw new Error('Please enter id');
    }
};