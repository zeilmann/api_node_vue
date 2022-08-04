<template>
<div class="columns is-mobile is-centered">
<div class="box is-centered">

<input class="input" type="phonenumber" placeholder="Phone Number">
<input class="input" type="ordernumber" placeholder="Order Number" v-model="ordernumber">
<br>
<br>
<button class="button is-success" @click="login">Success</button>
</div>


</div>
<br>
<div class="columns is-mobile is-centered">
<div class="box is-centered">
<h1>Search by link:</h1>
<h1>Using path /pedidos/{order+phonenumber}</h1>
<h1>Example: Order Number: 21 / Phone Number: (51)99712416</h1>
<h1>http://localhost/pedidos/215199712416</h1>
</div>
</div>

</template>

<script>

export default {
    data(){
        return {
            
        }
    },



    
    methods: {
        login(){
            
            this.$router.push({path: '/pedido/'+ this.ordernumber });
        }
    }
}
</script>