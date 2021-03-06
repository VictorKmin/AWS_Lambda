const findUserById = require('../../controller/userController/findUserById');
const responseObject = require('../../helper/responseObject');
module.exports = async (userId) => {
    let msg = {};
    const oneUser= await findUserById(userId);
    if (!oneUser) {
        msg = {Success: true, message: `User with id ${userId} is not found`};
    } else {
        console.log(oneUser);
        msg = {Success: true, message: oneUser};
    }
    return responseObject(200, msg)
};