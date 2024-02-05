<template>
    <div class="MainSection">
        <div class="inputSection__Fields">
        <input :value="exps.sum" @input="exps.sum = $event.target.value" class="inputField" type="text">
        <input @click="createPost" class="inputField__submit" type="submit" value="Потратить">
        </div>
        <div class="InputSection__categories"> Категория трат
            <div class="InputSection__categories__buttons">
            <input  class="InputSection__categories__button" id="one" type="radio" value="food" v-model="exps.category">
            <label for="one">food</label>
            <input class="InputSection__categories__button" id="two" type="radio" value="transport" v-model="exps.category">
            <label for="two">transport</label>
            <input class="InputSection__categories__button"  id="three" type="radio" value="entertainment" v-model="exps.category">
            <label for="three">entertainment</label>
            <input class="InputSection__categories__button"  id="four" type="radio" value="electronic" v-model="exps.category">
            <label for="four">electronic</label>
            <input class="InputSection__categories__button" id="five" type="radio" value="clothes" v-model="exps.category">
            <label for="five">clothes</label>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            exps: {
                sum:'',
            }
        }
    },
    methods: {
        createPost() {
            this.exps.id =Date.now();
            this.$emit('create', this.exps)
            this.exps = {
                sum: '',
                category:'',
            }
        },
        
    }
}
</script>

<style>
.focused {
    color: yellow;
}
.MainSection {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
}
.inputSection__Fields {
    display: flex;
    
    gap: 40px;
}
.inputField {
    border: 3px solid blue;
    height: 40px;
    border-radius: 10px;
    width: 300px;
    
}
.inputField__submit {
    border: 3px solid blue;
    height: 40px;
    border-radius: 10px;
    
    
}
.InputSection__categories{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.InputSection__categories__buttons {
    display: flex;
    gap: 10px;
    cursor: pointer;
    
}
.InputSection__categories__button {

border: 3px solid black;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    
}

</style>