const express = require("express");
const router = express.Router();

//importing the controllers.
const {getAllPorducts} = require('../controllers/products');


router.route("/").get(getAllPorducts);
// router.route("/testing",getAllProductsTesting);




//Exporting the router 
module.exports = router;


//Creating the route.
/*===================================================
we can also create the route like this.


router.get("/",(req,res)=>{
    res.send("I am the tradition way to making routes.")
})

==========================================================

*/ 


/*================================
To run the middleware we do like this

router.route("/").get(middleware,controllers);

=================================*/ 
