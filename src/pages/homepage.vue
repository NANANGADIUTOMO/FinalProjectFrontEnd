<template>
<div>
    <div class="d-flex">
        <div>
            <sidebar></sidebar>
        </div>
        <div>
            <mainComponent v-show="!formAlert" @deleteEmit="changgeFormAlert" class="main"></mainComponent> 
            <formAlert v-show="formAlert" textAlert="didelete" class="alert"></formAlert>
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

<style scoped>
.main{
    margin-left: 257px;
}
.alert{
    margin-left: 70%;
}
</style>