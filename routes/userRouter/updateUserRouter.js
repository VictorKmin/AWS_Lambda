// const findUserById = require('../../controller/userController/findUserById');
const updateUser = require('../../controller/userController/updateUser');
const responseObject = require('../../helper/responseObject');
module.exports = async (userToCreate) => {
    let msg = {};
    const id = userToCreate.id;
    const firstName = userToCreate.firstName;
    const lastName = userToCreate.lastName;
    const email = userToCreate.email;

    // const isUserPresent = await findUserById(id);
    // if (isUserPresent.Item)   msg = {Success: false, message: `User with id ${id} is already created`};

    const isUserCreate = await updateUser(id, firstName, lastName, email);
    if (!isUserCreate) {
        msg = {Success: false, message: `User with id ${id} was not created`};
    } else {
        msg = {Success: true, message: isUserCreate};
    }
    return responseObject(200, msg)
};