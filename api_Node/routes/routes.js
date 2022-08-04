var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UserController = require("../controllers/UserController");
var AdminAuth = require("../middleware/AdminAuth");
//Acess INDEX
router.get('/', HomeController.index);

router.post('/card_transaction', UserController.create);


//Acess all Movie Index
router.get("/allmovies",UserController.index);
//
router.get("/user/:id", UserController.findUser);




//MY ROUTES
router.get("/searchbymoviename/:name",UserController.findByname);
router.get("/user1/:id", UserController.findUser1);
router.post('/registermovie', UserController.create);

module.exports = router;