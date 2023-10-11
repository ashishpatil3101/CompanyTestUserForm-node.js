const { Model } = require("sequelize");
const  {User}= require("../models/index");


class UserRepository{

    async create( Userdata ){
         
        try {
            console.log( Userdata);

            const newUser = await User.create( Userdata );

            return newUser;
        }
        catch( error ){
            console.log( error);
            console.log( " something wrong in user repo layer");
            throw new Error("unable to store user info in system. please try again")
        }
    }

    async destroy( userId ){
         
      
        try {
           const data= await User.destroy({
                where: {
                    user_id: userId
                }
            });

            if( data == 0 ) throw new Error("deletion of user failed .please try again or check your userId");

            return "user  deleted succesfully";
        } 
        catch (error) {

            console.log("something is wrong is repository");
            throw new Error("deletion of user failed .please try again or check your userId");
            
        }
    }
    async getById( userId ){

        try {
          
            const user = await User.findOne( { where: {
                user_id: userId
            } });

            return user;
        }
         catch (error) {
            console.log("something is wrong is repository");
            throw new Error("unable to fetch user .please send your correct UserId");
        }
    }

    async getByEmail( userEmail ){

        try {
        
            const user = await User.findOne({
                where: {
                    user_email: userEmail
                }
            });
         
            return user;
        } 
        catch (error) {
            console.log("something is wrong is repository");
            return {};
        }
    }

    async updateAUser( userId, newDetailTobeUdated){

        try {
            
            const user = await User.update( newDetailTobeUdated, {
                where: {
                user_id: userId
                }
            });

            if( user == 0 ) throw new Error("No user found with this id: "+userId );

            return "new details of user has updated succesfully";

        }
         catch (error) {
            
            throw new Error("unable to update the user");
        }
    
    }

    async getImageOfUser( userId) {

        

        try {
            
            const user = await User.findOne({
                where: {
                    user_id: userId
                }
            });

            if( !user )throw new Error("user does not exist with corresponding User id")

            const image  = user.user_image;

            return image;
        } 
        catch (error) {
            
            console.log("somethings wrong repo layer")
            throw error;
        }
    }

    async  findAllTheUsers(){

        try {
            
            const  jsonResult= await User.findAll();

            return jsonResult;
        }
         catch (error) {
            
            console.log("somethings wrong in user repo layer");
            throw error;
        }
    }

}

module.exports = UserRepository;