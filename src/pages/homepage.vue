<template>
<div>
    <div class="d-flex">
        <div>
            <sidebar></sidebar>
        </div>
        <div>
            <mainComponent v-show="!formAlert" @deleteEmit="changgeFormAlert"></mainComponent> 
            <formAlert v-show="formAlert" textAlert="didelete"></formAlert>
        </div>
    </div>
</div>

</template>

<script>
import sidebar from '../components/sidebar.vue' 
import mainComponent from '../components/mainComponent.vue'
import formAlert from '../components/formalert.vue'
export default {
    name : 'homePage',
    components: {
        sidebar, mainComponent, formAlert
    },
    data(){
        return{
            formAlert : false
            
        }
    },
    methods:{
        changgeFormAlert(){
            this.formAlert = true;
        }
    }

}
</script>

<style>

</style>