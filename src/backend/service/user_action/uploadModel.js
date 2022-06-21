module.exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
        message: '3D model has been upload!',
        input: event,      
      }),
    }

    callback(null, response);
}