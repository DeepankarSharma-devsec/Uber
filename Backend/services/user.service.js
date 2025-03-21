const userModel = require ('../models/user.model');

module.exports.createUser=async({
    firstname,lastname,email,password
})=> {
    if(!firstname || !lastname || !password){
        throw new Error('All fields are requried');
    }
    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}