var User = require("../models/User");


class UserController{
    async index(req, res){
        var users = await User.findAll();
        res.json(users);
    }

    async findUser(req, res){
        var id = req.params.id;
        var user = await User.findById(id);
        if(user == undefined){
            res.status(404);
            res.json({});
        }else{
            res.status(200)
            res.json(user);
        }
    }


    async findByname(req, res){
        console.log('Search World' + req.params.name);
        var name = req.params.name;
        var user = await User.findByname(name);
        if(user == undefined){
            res.status(404);
            res.json({});
        }else{
            res.status(200)
            res.json(user);
        }
    }



    async findUser1(req, res){
        var id = req.params.id;
        var user = await User.findById1(id);
        if(user == undefined){
            res.status(404);
            res.json({});
        }else{
            res.status(200)
            res.json(user);
        }
    }


    async create(req, res){
        var {movieName, movieYear, movieQuality, movieType, movieDuration} = req.body;

     
        await User.new(movieName, movieYear, movieQuality, movieType, movieDuration);
        
        res.status(200);
        res.send("Tudo OK!");
    }

    async edit(req, res){
        var {id, name, role, email} = req.body;
        var result = await User.update(id,email,name,role);
        if(result != undefined){
            if(result.status){
                res.status(200);
                res.send("Tudo OK!");
            }else{
                res.status(406);
                res.send(result.err)
            }
        }else{
            res.status(406);
            res.send("Ocorreu um erro no servidor!");
        }
    }

    async remove(req, res){
        var id = req.params.id;

        var result = await User.delete(id);

        if(result.status){
            res.status(200);
            res.send("Tudo OK!");
        }else{
            res.status(406);
            res.send(result.err);
        }
    }

    async recoverPassword(req, res){
        var email = req.body.email;
        var result = await PasswordToken.create(email);
        if(result.status){
           res.status(200);
           res.send("" + result.token);
        }else{
            res.status(406)
            res.send(result.err);
        }
    }

    async changePassword(req, res){
        var token = req.body.token;
        var password = req.body.password;
        var isTokenValid = await PasswordToken.validate(token);
        if(isTokenValid.status){
            await User.changePassword(password,isTokenValid.token.user_id,isTokenValid.token.token);
            res.status(200);
            res.send("Senha alterada");
        }else{
            res.status(406);
            res.send("Token inválido!");
        }
    }

    async login(req, res){
        var {email, password } = req.body;

        var user = await User.findByEmail(email);

        if(user != undefined){

            var resultado = await bcrypt.compare(password,user.password);

            if(resultado){

                var token = jwt.sign({ email: user.email, role: user.role }, secret);

                res.status(200);
                res.json({token: token});

            }else{
                res.status(406);
                res.json({err: "Senha incorreta"});
            }

        }else{

            res.status(406);
            res.json({status: false, err: "O usuário não existe!"});

        }
    }

}

module.exports = new UserController();