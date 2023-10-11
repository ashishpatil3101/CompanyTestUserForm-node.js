
const reqBodytoObject = function( reqBody ){

    var newObject = {
        user_name: reqBody.body.user_name,
        user_email: reqBody.body.user_email,
        user_password: reqBody.body.user_password,
        user_image: req.file ? req.file.buffer : null
    }

    return newObject;
}

const userToResponseUserBody = function ( user ){

    return {
        email: user.user_email,
        userName: user.user_name,
        totalOrser: user.total_orders
    }
}

module.exports = {reqBodytoObject,userToResponseUserBody} ;