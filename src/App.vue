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
    <input-section/>
</div>
    
</template>

<script>
import InputSection from '@/components/InputSection.vue'


export default {
    components: {

        InputSection,
        
    },
data() {

    return {

        likes:0,
    }

}
}

</script>

<style>
* {
    box-sizing: border-box;}
html {
    width: 1820px;
    width: 100%;

}
body {

    margin: 0;
    padding: 0;
    width: 1820px;
    margin-left: auto;
    margin-right: auto;
    
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