<template>
    <div class="MainSection">
        <div class="inputSection__Fields">
        <input  class="inputField" type="text">
        <input class="inputField" type="submit" value="Потратить">
    </div>
        <div class="InputSection__categories">
            <input class="InputSection__categories__button" type="button">
            <input class="InputSection__categories__button" type="button">
            <input class="InputSection__categories__button" type="button">
            <input class="InputSection__categories__button" type="button">
            <input class="InputSection__categories__button" type="button">
        </div>
    </div>
    
</template>

<script>

</script>

<style>
.MainSection {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
}
.inputSection__Fields {

}
.inputField {
    border: 3px solid blue;
    height: 40px;
    border-radius: 10px;
    
}
.InputSection__categories{
    display: flex;
    gap: 20px;
}
.InputSection__categories__button {

border: 3px solid blue;
    height: 40px;
    border-radius: 10px;
}
</style>