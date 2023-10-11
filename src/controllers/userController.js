const userService  = require('../service/userService');
const  {reqBodytoObject} = require("../constructors/userContructor")


const theUserService  = new userService();



const create = async (req, res) => {
      try {
        
        const newObject= {
            user_name: req.body.user_name,
            user_password: req.body.user_password,
            user_image: req.file ? req.file.buffer : null,
            user_email: req.body.user_email
        };

        const result = await theUserService.create( newObject );
      
        return res.status(201).json({
            success: true,
            message: "successfully created the user",
            data: result

        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message,
            message: "note able to create the user"
        });
      }
    };


const deleteUser = async( req, res )=> {

    try {
        
        const response = await theUserService.deleteUser( req.params.id );

        return res.status(200).json({
           
            success: true,
            message: response
           
        
        });
        
    } 
    catch (error) {
        console.log("something is wrong in controller layer ");
       
        return res.status(500).json({
          
            error: error.message,
            message: "not  able to delete the user "

        });
    }

}

const getAUser = async( req, res )=> {

    try {
        
        const response = await theUserService.getAUser( req.params.id );

        return res.status(200).json({
           
            success: true,
            message: "user information  fetched succesfully",
            data: response
           
        
        });
        
    } 
    catch (error) {
        console.log("something is wrong in controller layer ");
       
        return res.status(500).json({
          
            error: error.message,
            message: "not  able to fetch the user "

        });
    }
    
}

const updateAUser = async( req, res )=> {

    try {
        
        
        const response = await theUserService.updateAuser( req.params.id,req.body );

        return res.status(200).json({
           
            success: true,
            message: response
            
        });
        
    } 
    catch (error) {
        console.log("something is wrong in controller layer ");
       
        return res.status(500).json({
          
            error: error.message,
            message: "not  able to update the user "

        });
    }
    
}

const getImageByUserID = async( req, res )=> {

    try {
        
        const image = await theUserService.getImageByUserID( req.params.id );
        console.log( image);

        res.set('Content-Type', 'image/jpeg'); // Set the appropriate content type
        res.send(image);

        // return image;
        
    } 
    catch (error) {
        console.log("something is wrong in controller layer ");
       
        return res.status(500).json({
          
            error: error.message,
            message: "not  able to fetch the image of user "

        });
    }
    
}

const findAllTheUsers = async( req ,res )=>{
      
    try {
        const json= await theUserService.findAllTheUsers();
        res.json(json); 
    } 
    catch (error) {
      console.error('Error:', error);
      res.status(500).send('not able fetch users info');
    }
}

module.exports ={
    create,
    deleteUser,
    getAUser,
    updateAUser,
    getImageByUserID,
    findAllTheUsers
  
}