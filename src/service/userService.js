const   userRepository = require("../repository/userRepository");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;
const { v4: uuidv4 } = require('uuid');

const { userToResponseUserBody } = require("../constructors/userContructor")


class UserService{

    constructor(){
        this.theUserRepository= new userRepository();

    }

    async create (userDetail){
        
        try {
            console.log(  userDetail.user_email )
            
            const findUserwithEmail = await this.theUserRepository.getByEmail( userDetail.user_email);
           
           
            if( findUserwithEmail  )throw new Error("please provide other mail address as mail associated with another user already existed");
            
           
            var newObject = { user_id: uuidv4() ,created_at: new Date()  };
            var prepareUserDetailObject = {...userDetail , ...newObject };

            const user = await this.theUserRepository.create( prepareUserDetailObject );

            const token=  this.createToken( user );

            return "user details user email "+user.user_email+" user name "+user.user_name+ " token "+token;
        } 
        catch (error) {
            console.log("something is wrong  service layer ");
            throw error;
        }
    }

     createToken(user){

        try {
            console.log(user.user_id)
            const result = jwt.sign( {user_id: user.user_id} , ''+JWT_KEY,{expiresIn: '1h'});

            return result;
        } 
        catch (error) {
            console.log("something is wrong  user service layer ");
            throw error;    
        }
    }

   
    async deleteUser( userId ){

        try {
            
            const result = await this.theUserRepository.destroy( userId );

            console.log( result );

            return result; 

        } catch (error) {
            
            throw new Error("unable  to delete the user .please check you userID again");
        }
    }

    async getAUser( userId){

        

        try {
            
            const result = await this.theUserRepository.getById( userId );

            if( result ) {
                 const newResponseBody = userToResponseUserBody( result );

                 return newResponseBody;
            }
           
            throw new Error("user does not exist .please check your userID again");
            
        } catch (error) {
            
            throw error;
        }
    }

    async updateAuser(userId , userDetail ){

        try {

            const result = await this.theUserRepository.updateAUser( userId , userDetail );

            return result;
                 
        } 
        catch (error) {
            
            throw error;
        
        }
    }

    async getImageByUserID(userId){

        try {
            
            const result = await this.theUserRepository.getImageOfUser( userId );

            return result;
        } 
        catch (error) {
            
            throw error;
        }
    }

    async findAllTheUsers(){
             
        try {
             const result = await this.theUserRepository.findAllTheUsers();
             
             return result;
        } 
        catch (error) {
            
            console.log("somethings wrong user service layer");
            throw error;
        }
    }
   
}



module.exports = UserService;