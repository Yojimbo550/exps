<template>
    <div>
        <ul>
            <div v-for="exp in exps" :key="exp.id">
                {{ exp.sum }}
                {{ exp.category }}
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

</style>