module.exports = (statusCode, message)=> {
    return {
        statusCode: statusCode,
        body: JSON.stringify({
            event: message
        })
    };
};