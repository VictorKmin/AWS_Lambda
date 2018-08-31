const findAllUsers = require('../../controller/userController/findAllUsers');
const responseObject = require('../../helper/responseObject');
module.exports = async () => {
    let msg = {};
    const allUsers = await findAllUsers();
    if (!allUsers) {
        msg = {Success: true, message: "No users in DataBase"};
    } else {
        msg = {Success: true, message: allUsers};
    }
    return responseObject(200, msg)
};