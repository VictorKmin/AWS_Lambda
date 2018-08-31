const validator = require('../../helper/userValidator');
const findAllUsers = require('./findAllUsersRouter');
const findUserById = require('./findUserByIdRouter');
const createUser = require('./createUserRouter');
const updateUser = require('./updateUserRouter');
const deleteUser = require('./deleteUserRouter');
const resp = require('../../helper/responseObject');
module.exports = (method, url, body) => {
    const secondUrlPart = url.split('%2F')[1];
    if(url.split('%2F')[2]) return resp(404, {success: false, message: "This URL is not found"});


    if (!secondUrlPart && method === "GET") {
        return findAllUsers();
    }
    if (secondUrlPart && method === "GET") {
        console.log(secondUrlPart);
        return findUserById(secondUrlPart);
    }
    if (!secondUrlPart && method === "POST") {
        const validUser = validator(body, method);
        return createUser(validUser);
    }
    if (!secondUrlPart && method === "PUT") {
        const validUser = validator(body, method);
        console.log(validUser);
        return updateUser(validUser);
    }
    if (!secondUrlPart && method === "DELETE") {
        return deleteUser(secondUrlPart);
    }


    return resp(404, {success: false, message: "Please check method"});
};