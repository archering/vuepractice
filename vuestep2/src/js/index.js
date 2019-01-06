import Vue from "vue";

import productList from "../views/list.vue";

new Vue({
    el:"#abc",
    data:{
        list:[
            {
                name:"product1",
                img:"./src/assets/1.jpg",
                desc:"this is product1"
            },
            {
                name:"product2",
                img:"./src/assets/2.jpg",
                desc:"this is product2"
            },
            {
                name:"product3",
                img:"./src/assets/3.jpg",
                desc:"this is product3"
            },
            {
                name:"product4",
                img:"./src/assets/4.jpg",
                desc:"this is product4"
            },
            {
                name:"product5",
                img:"./src/assets/5.jpg",
                desc:"this is product5"
            }                                       
        ]        
    },
    render:function(h){
        return h(productList);
    }
});