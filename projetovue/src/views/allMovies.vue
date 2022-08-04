<template>

<div class="columns is-mobile is-centered">
<div class="box">

<table v-if="erro != 'AxiosError: Network Error'" class="table ">
  <thead>
    <tr>
      <th>ID</th>
      <th>Movie Title:</th>
      <th>Movie Year</th>
      <th>Movie Quality:</th>
      <th>Movie Type:</th>
      <th>Movie Duration:</th>
      <th>Movie Picture:</th>  
    </tr>
  </thead>
  
  <tbody>
    <tr v-for="user in users" :key="user.id">
      
      <th>{{user.id}}</th>
      <td>{{user.MovieName}}</td>
      <td>{{user.MovieYear}}</td>
      <td>{{user.MovieQuality}}</td>
      <td>{{user.MovieType}}</td>
      <td>{{user.MovieDuration}}</td>
      <img :src="'data:image/jpeg;base64,' + user.MoviePicture"  /> 
    </tr>
    
  </tbody>
</table>
<h1 v-else> Api Connection Failed - Check api_Node if is running </h1>


         </div>
     </div>


</template>
<script>
var Buffer = require('buffer/').Buffer;
import axios from 'axios';
export default{



created(){

axios.get("http://localhost:8686/allmovies/").then(res => {
 
    
  this.users = res.data;
    
  this.dataImage = Buffer.from(res.data[0].MoviePicture).toString('base64'); 
    var i = 0;
    for (this.obj in res.data) {
    //CHANGE ARRAY IMAGE, BUFFER TO BASE 64
    res.data[i].MoviePicture = Buffer.from(res.data[i].MoviePicture).toString('base64');
    console.log(res.data[i].MoviePicture);
    i++
   }
  
    
    }).catch(err => {
    
    this.erro = err;
    console.log(this.erro);
    })
    

    },


    data(){

        return {
            users : [],
            erro : '',
            image: '',
            
              }
        
    },

    
}






</script>
<style>
    
</style>