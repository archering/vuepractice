<template>
    <div>
            <h3>{{title}}</h3>
            <ul>
                <product-list-item  v-for="item in list" :item="item"></product-list-item>
            </ul>
    </div>
</tempalte>

<script>
    import productlistitem from './list-item.vue';

    export default {
        name:"product-list",
        data:function(){
            title: " this is all products"
        },
        props:["list"],
        components:{
            "product-item-list":productlistitem
        }
    }
</script>
