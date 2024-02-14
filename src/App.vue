<template>
    <div class="app">
    <div class="header">
        <div>
            UrWallet
        </div>
        <div class="header__anchors">
         <div>
            Exps by category
         </div>
         <div>
             Exps by month
         </div>
         <div>
            Contacts
         </div>
        </div>
    </div>
    
    <input-section @create="createPost"/>
    <exps-list :exps="exps"
    />
</div>
    
</template>

<script>
import InputSection from '@/components/InputSection.vue'
import ExpsList from './components/ExpsList.vue';

export default {
    components: {

        InputSection,ExpsList,
        
    },
data() {

    return {

        
        exps:['kek','ef'],
    }

},
mounted() {
    if(localStorage.length > 0) {
        for(let i = 0; i <localStorage.length;i++){
             console.log(JSON.parse(localStorage.getItem(localStorage.key(i)) )) ;
             const data1 =  JSON.parse(localStorage.getItem(localStorage.key(i)) );
             this.exps.push(data1);
        }
    }
},
methods: {
    createPost(exps) {
        this.exps.push(exps)
    },
    
}
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,500;1,500&display=swap');
* {
    box-sizing: border-box;}
html {
    width: 1820px;
    width: 100%;

}
body {

    margin: 0;
    padding: 0;
    width: 1620px;
    margin-left: auto;
    margin-right: auto;
    font-family:'Nunito',sans-serif;
    
}
.header {
    padding-top: 20px;
    display:flex;
    justify-content: space-between;
    font-size: 50px;
    align-items: center;

}
.header__anchors {
    
    display:flex;
    gap: 30px;
    font-size: 20px;

}
</style>