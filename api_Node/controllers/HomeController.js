class HomeController{

    async index(req, res){
        res.send("API EXPRESS! - Augusto Zeilmann");
    }

    async validate(req, res){
        res.send("okay");
    }

}

module.exports = new HomeController();