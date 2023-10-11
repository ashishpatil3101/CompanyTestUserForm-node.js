const express = require("express");
const path =require("path")

const {
    create,
    deleteUser,
    getAUser,
    updateAUser,
    getImageByUserID,
    findAllTheUsers

      } = require("../controllers/userController");

const verifyTokenMiddleware = require("../middlewares/authMiddleWare")



const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const rout = express.Router();


//token will be created after the user created as there was not login form
rout.post("/insert",  upload.single('user_image'),  create);
rout.delete("/delete/:id" , deleteUser );
rout.get("/details/:id", getAUser );
rout.put("/update/:id", verifyTokenMiddleware, updateAUser );

rout.get("/image/:id", getImageByUserID );


//use this api to get all users info in table
rout.get('/all-users', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/users.html'));
});

//only use for above api
rout.get("/users", findAllTheUsers );


module.exports = rout;