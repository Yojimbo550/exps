<template>
    <div>
        <ul>
            <div class="expsList" v-for="exp in exps" :key="exp.id">
                <div>{{ exp.sum }}</div> 
                <div>{{ exp.category }}</div>
            </div>
        </ul>
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
    justify-content: space-between;
    
}
</style>