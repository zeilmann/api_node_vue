<template>

<body>
<div id = "grad1" class="columns is-mobile is-centered">

<h1 v-if="this.idvendas === -1">NADA ENCONTRADO</h1>
<div v-else >



  <h1></h1>       
 <div id ="box1" class="box">  
 <table class="table ">
  <thead>
    <tr>
      <th>ID</th>
      <th>Nome: </th>
      <th>Endereco:</th>
      <th>Cidade:</th>
      <th>Complemento:</th>
      <th>Telefone:</th>
      <th>Status:</th>
      <th>Valor Total:</th>        
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <th>{{this.idvendas}}</th>
      <td>{{this.nome}}</td>
      <td>{{this.endereco}}</td>
      <td>{{this.cidade}}</td>
      <td>{{this.comp2}}</td>
      <td>{{this.telefone}}</td>
      <td v-if="this.status === 'AGUARDANDO'" id = "cor1">{{this.status}}</td>
      <td v-else id = "cor2">{{this.status}}</td>
      <td>R$ : {{this.total}}</td>
    </tr>
    
  </tbody>
</table>
 </div>
 
 <div id = "box2" class="box ">  
 <table class="table ">
  <thead>
    <tr>
      <th>Produto </th>
      <th>Preco</th>
      <th>Quantidade:</th>
      <th>Detalhes:</th>
    </tr>
  </thead>
  
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th>{{user.name}}</th>
      <td>{{user.price}}</td>
      <td>{{user.count}}</td>
      <td v-if="user.itensq != 'undefined'">{{user.itensq}}</td>
      
    </tr>
    
  </tbody>
</table>
 </div>

</div> 

</div>
</body>
</template>
<script>
import axios from 'axios';
export default{


created(){

axios.get("http://localhost:8686/user/" + this.$route.params.id).then(res => {
    
    this.nome = res.data.nome;
    this.endereco = res.data.endereco;
    this.idvendas = res.data.idvendas;
    this.comp1 = res.data.comp2;
    this.cidade = res.data.cidade;
    this.telefone = res.data.telefone;
    this.status = res.data.status;
    this.total = res.data.total;

    console.log(this.name);
    console.log(this.email);
    }).catch(err => {
    console.log(err);

    })


    axios.get("http://localhost:8686/user1/" + this.$route.params.id).then(res => {
    console.log("OLA");
    console.log(res.data);
    this.users = res.data;

    }).catch(err => {
    console.log(err);

    })


    

    },


    data(){

        return {
            users: [],
            name: '',
            price: '',
            count: '',
            itensq: '',
            

              }
        
    },
}




</script>
<style>




</style>