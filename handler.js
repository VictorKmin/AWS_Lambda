//To start DB
//java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
//To deleteDB
//aws dynamodb delete-table --table-name users

'use strict';
const getTables = require('./allTables');
const createDB = require('./createDB');
const createUser = require('./CRUD/create');
const readIOneUser = require('./CRUD/readOne');
const updateUser = require('./CRUD/update');
const deleteUser = require('./CRUD/delete');
const response = require('./helper/responseObject');


module.exports.hello = (event, context, callback) => {
    response(200, 'U a on AWS');
    callback(null, response)
};

module.exports.create = async (event, context, callback) => {
    try {
        let id = event.body.id;
        if (!id) throw new Error("body have not id");

        let name = event.body.name;
        if (!name) throw new Error("body have not name");

        let email = event.body.email;
        if (!email) throw new Error("body have not email");

        console.log(id);
        console.log(name);
        console.log(email);
        const user = await createUser(id, name, email);
        console.log(user);


    } catch (e) {
        callback(response(400, e), null)
    }
};

module.exports.getOne = async (event, context, callback) => {
    try {
        let id = event.pathParameters.id;
        if (!id) throw new Error("body have not id");

        const user = await readIOneUser(id);
        console.log(user);
        callback(null, response(200, user));
    } catch (e) {
        callback(response(400, e), null)
    }

};

module.exports.update = async (event, context, callback) => {
    try {
        let id = event.body.id;
        if (!id) throw new Error("body have not id");

        let name = event.body.name;
        if (!name) throw new Error("body have not name");

        let email = event.body.email;
        if (!email) throw new Error("body have not email");
        console.log(id);
        console.log(name);
        console.log(email);
        const user = await updateUser(id, name, email);
        callback(null, response(200, user))
    } catch (e) {
        callback(response(400, e), null)
    }
};

module.exports.delete = async (event, context, callback) => {
    try {
        let id = event.body.id;
        if (!id) throw new Error("body have not id");

        console.log(id);
        const user = await deleteUser(id);
        callback(null, response(200, user));
    } catch (e) {
        callback(response(400, e), null)
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