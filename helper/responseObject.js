module.exports = (statusCode, message)=> {
    const resp = {
        statusCode: statusCode,
        body: JSON.stringify({
            event: message
        })
    };
};