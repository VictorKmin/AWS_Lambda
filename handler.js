//To start DB
//java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
//To deleteDB
//aws dynamodb delete-table --table-name users

'use strict';
const getTables = require('./allTables');
const createDB = require('./createDB');
const createUser = require('./CRUD/create');
const readOneUser = require('./CRUD/readOne');
const readIAllUser = require('./CRUD/readAll');
const finduserByFirstName = require('./CRUD/finduserByFirstName');
const updateUser = require('./CRUD/update');
const deleteUser = require('./CRUD/delete');
const response = require('./helper/responseObject');
const validator = require('./helper/userValidator');


module.exports.hello = (event, context, callback) => {
    let res = response(200, 'U a on AWS');
    callback(null, res)
};

module.exports.create = async (event, context, callback) => {
    try {
        let body = JSON.parse(event.body);
        let validUser = validator(body, "post");
        const user = await createUser(validUser.id, validUser.firstName, validUser.lastName, validUser.email);
        let msg = {success: true, message: user};
        callback(null, response(200, msg));

    } catch (e) {
        let msg = {success: false, message: e.message};
        callback(null, response(400, msg))
    }
};

module.exports.getOne = async (event, context, callback) => {
    try {
        let id = event.pathParameters.id;
        if (!id) throw new Error("body have not id");
        const user = await readOneUser(id);
        if (!user.Item) throw new Error(`User with id ${id} is not found`);
        let msg = {success: true, message: user};
        callback(null, response(200, msg));
    } catch (e) {
        let msg = {success: false, message: e.message};
        callback(null, response(400, msg))
    }
};

module.exports.getAll = async (event, context, callback) => {
    try {
        const user = await readIAllUser();
        callback(null, response(200, user));
    } catch (e) {
        let msg = {success: false, message: e.message};
        callback(null, response(400, msg))
    }
};
module.exports.findByFirstName = async (event, context, callback) => {
    try {
        const user = await finduserByFirstName('itsMyname');
        callback(null, response(200, user));
    } catch (e) {
        let msg = {success: false, message: e.message};
        callback(null, response(400, msg))
    }
};

module.exports.update = async (event, context, callback) => {
    try {
        let body = JSON.parse(event.body);
        validator(body, "put");
        const isUserPresent = await readOneUser(body.id);
        if (!isUserPresent.Item) throw new Error(`User with id ${body.id} is not found`);
        const user = await updateUser(body.id, body.firstName, body.lastName, body.email);
        let msg = {success: true, message: user};
        callback(null, response(200, msg));
    } catch (e) {
        console.log(e);
        let msg = {success: false, message: e.message};
        callback(null, response(400, msg))
    }
};

module.exports.delete = async (event, context, callback) => {
    try {
        let id = event.pathParameters.id;
        if (!id) throw new Error("url have not id");
        const isUserPresent = await readOneUser(id);
        if (!isUserPresent.Item) throw new Error(`User with id ${id} is not found`);
        const user = await deleteUser(id);
        let msg = {success: true, message: user};
        callback(null, response(200, msg));
    } catch (e) {
        let msg = {success: false, message: e.message};
        console.log(msg);
        callback(null, response(400, msg))
    }
};


module.exports.createTable = (event, context, callback) => {
    const resp = {
        statusCode: 200,
        body: JSON.stringify({
            event: createDB()
        })
    };
    callback(null, resp)
};

module.exports.getTables = (event, context, callback) => {
    const resp = {
        statusCode: 200,
        body: JSON.stringify({
            event: getTables()
        })
    };
    callback(null, resp)
};