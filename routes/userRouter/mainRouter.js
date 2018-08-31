const validator = require('../../helper/userValidator');
const findAllUsers = require('../../controller/userController/findAllUsers');
const findUserById = require('../../controller/userController/findUserById');
const createUser = require('../../controller/userController/createUser');
const updateUser = require('../../controller/userController/updateUser');
const deleteUser = require('../../controller/userController/deleteUser');
module.exports = (method, url, body) => {
    const secondUrlPart = url.split('%2')[1];
    if(url.split('%2')[2]) throw new Error('Please, check entered URL');

    if (!secondUrlPart || method === "GET") {
        const allUsers = findAllUsers();
    }
    if (secondUrlPart || method === "GET") {
        const oneUser = findUserById(secondUrlPart);
    }
    if (!secondUrlPart || method === "POST") {
        const validUser = validator(body, method);
        const isUserCrated = createUser(validUser);
    }
    if (!secondUrlPart || method === "PUT") {
        const validUser = validator(body, method)
        const isUserupdate = updateUser(validUser);
    }
    if (!secondUrlPart || method === "DELETE") {
        const isUserupdate = deleteUser(secondUrlPart);

    }
};