var jwt = require("jsonwebtoken");
var secret = "adsuasgdhjasgdhjdgahjsg12hj3eg12hj3g12hj3g12hj3g123";

module.exports = function(req, res, next){
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(' ');
        var token = bearer[1];

        try{
            var decoded = jwt.verify(token,secret);
            
            if(decoded.role == 1){
                next();
            }else{
                res.status(403);
                res.send("You dont have permission to do that");
                return;
            }
        }catch(err){
            res.status(403);
            res.send("You are not logged in");
            return;
        }
    }else{
        res.status(403);
        res.send("You are not logged in");
        return;
    }
}