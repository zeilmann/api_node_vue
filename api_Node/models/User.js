var knex = require("../database/connection");


class User{
    //list all movies
    async findAll(){
        try{
            var result = await knex.select(["id","MovieName","MovieYear","MovieQuality", "MovieType", "MovieDuration", "MoviePicture"]).table("movies");
            return result;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    
    //SEARCH MOVIE DATABASE BY NAME
    async findByname(name){
        try{
            var result = await knex.select(["id","MovieName","MovieYear","MovieQuality", "MovieType", "MovieDuration", "MoviePicture"]).where('MovieName', 'like', `%${name.replaceAll('%', '\\%')}%`).table("movies");
            
            if(result.length > 0){
                return result;
            }else{
                return undefined;
            }

        }catch(err){
            console.log(err);
            return undefined;
        }
    }
    //ADD MOVIE DATABASE
    async new(movieName, movieYear, movieQuality, movieType, movieDuration){
        console.log(movieYear);
        try{
           
            await knex.insert({movieName, movieYear, movieQuality, movieType, movieDuration}).table("movies");
        }catch(err){
            console.log(err);
        }
    }   

    

    
    
}

module.exports = new User();