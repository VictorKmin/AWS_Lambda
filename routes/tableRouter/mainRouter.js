const createTable = require('../../controller/tableController/createDB');
const findTables = require('../../controller/tableController/allTables');
module.exports = (method, url) => {
    const secondUrlPart = url.split('%2')[1];

    if (!secondUrlPart && method === "GET") {
        return findTables();
    }
    if (!secondUrlPart && method === "POST") {
        return createTable();
    }

    return new Error ('Please check entered URL or method')
};