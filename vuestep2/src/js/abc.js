

Vue.component("product-list",{
    template:'<div>'+
                  '<h3>{{title}}</h3>'+
                  '<ul>'+
                      '<product-list-item  v-for="item in list" :item="item"></product-list-item>'+
                  '</ul>'+
             '</div>',
    props:["list"],
    data:function(){
        return {
            title:" this is all products"
        }
    }
});

Vue.component("product-list-item",{
    template:'<li>'+
                  '<h4>{{item.name}}</h4>'+
                  '<div  class="item-box">'+
                      '<div class="img-wrapper"><img v-bind:src="item.img"  width="100" height="100"/></div>'+
                      '<div class="desc">{{item.desc}}</div>' +
                  '</div>'+
             '</li>',
    props:["item"],
    data:function(){
        return {
            title:" this is all products"
        }
    }
});

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
    }
});