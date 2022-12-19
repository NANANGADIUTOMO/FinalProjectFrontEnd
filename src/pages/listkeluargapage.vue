<template>
<div>
    <div class="d-flex">
        <div>
            </div>
                <sidebar></sidebar>
            <div>
                <listkeluargaComp v-show="!formalertanggota" @deleteEmitAnggota="changgeFormAlert" ></listkeluargaComp>
                <formalertanggota v-show="formalertanggota" textAlertkelu="Didelete"></formalertanggota>
            </div>
    </div>
</div>
  
</template>

<script>
import sidebar from '../components/sidebar.vue'
import listkeluargaComp from '../components/listkeluargaComp.vue'
import formalertanggota from '../components/formalertanggota.vue'
export default {
    name: 'listkeluargaPage',
    components:{
         sidebar, listkeluargaComp,
         formalertanggota
    },
    data(){
        return{
            formalertanggota : false
        }
    },
    methods:{
        changgeFormAlert(){
            this.formalertanggota = true;
        }
    }
}
</script>

<style>

</style>