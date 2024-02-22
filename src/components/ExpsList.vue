<template>
    <div class="expsList">
            <div  class="expsList__fields" v-for="exp in exps" :key="exp.id">
                <div>{{ exp.sum }}</div> 
                <div>{{ exp.category }}</div>
                <!-- <div>{{ exp.id }}</div> -->
            </div>      
    </div>
</template>

<script>
export default {
    props:{
        exps: {
            type:Array
            
        }
    },
    setup () {
        

        return {}
    }
}
</script>

<style>
.expsList {
    display:flex;
    max-width: 100%;
    flex-direction: column;
    gap: 2px;
    
    
}
ul {
    padding: 0;
    margin:0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    
    
}
.expsList__fields {
    display:flex;
    justify-content: space-between;
    gap: 700px;
    background-color: rgb(79, 76, 76);
    color: rgb(255, 255, 0);
    border-radius: 10px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
    
    
}
</style>