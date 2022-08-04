<template>
    <div>
        <h2>Movie Register Data Base</h2>    
        <hr>

        <div class="columns is-centered">
            <div class="column is-half">
                <div v-if="error != undefined">
                    <div class="notification is-danger">
                        {{error}}
                    </div>
                </div>
                <p>Movie Name</p>
                <input type="text" placeholder="Movie Name" class="input" v-model="movieName">
                <p>Movie Year</p>
                <input type="text" placeholder="Movie Year" class="input" v-model="movieYear">
                <p>Movie Quality</p>
                <input type="text" placeholder="Movie Quality" class="input" v-model="movieQuality">
                <p>Movie Type</p>
                <input type="text" placeholder="Movie Type" class="input" v-model="movieType">
                <p>Movie Duration</p>
                <input type="text" placeholder="Movie Duration" class="input" v-model="movieDuration">
                
                <hr>
                <button class="button is-success" @click="register">Cadastrar</button>
            </div>
        </div>
    </div>    
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            movieName: '',
            movieYear: '',
            movieQuality: '',
            movieType: '',
            movieDuration: '',
            error: undefined,
        }
    },
    methods: {
        register(){
            axios.post("http://localhost:8686/registermovie",{
                movieName: this.movieName,
                movieYear: this.movieYear,
                movieQuality: this.movieQuality,
                movieType: this.movieType,
                movieDuration: this.movieDuration
            }).then(res => {
                console.log(res);
                alert(res.data);
                //this.$router.push({name: 'Home'});
            }).catch(err => {
                var msgErro = err.response.data.err;
                console.log(msgErro);
            })
        }
    }
}
</script>

<style scoped>

</style>