<template>
    <li>
        <h4>{{item.name}}</h4>
        <div  class="item-box">
            <div class="img-wrapper"><img v-bind:src="item.img"  width="100" height="100"/></div> 
            <div class="desc">{{item.desc}}</div>
        </div>
    </li>
</tempalte>

<script>
    export default {
        name:"product-list-item",
        props:["item"]
    }
</script>

<style scoped>
        .img-wrapper{
            vertical-align: middle;
        }
        .img-wrapper,
        .desc{
            display: inline-block;
        }    
</style>