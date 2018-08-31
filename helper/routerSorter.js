const routes = require('../constants/routerConstants');
const userRouter = require('../routes/userRouter/mainRouter');
const tableRouter = require('../routes/tableRouter/mainRouter');

module.exports = (method, url, body) => {
    const firstUrlPart = url.split('%2')[0].toLowerCase();

    if (firstUrlPart === routes.users) {
        return userRouter(method, url, body)
    }
    if (firstUrlPart === routes.tables) {
        return tableRouter(method, url)
    }
};