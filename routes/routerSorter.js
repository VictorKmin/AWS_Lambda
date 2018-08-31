const routes = require('../constants/routerConstants');
const userRouter = require('./userRouter/mainRouter');
const tableRouter = require('./tableRouter/mainRouter');
const resp = require('../helper/responseObject');

module.exports = (method, url, body) => {
    const firstUrlPart = url.split('%2')[0].toLowerCase();
    if (firstUrlPart === routes.users) {
        return userRouter(method, url, body)
    }
    if (firstUrlPart === routes.tables) {
        return tableRouter(method, url)
    }

    return resp(404, {success: false, message: "This URL is not found"});
};