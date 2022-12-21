<template>
  <div>
    <div class="d-flex">
        <div>
            <sidebar></sidebar>
        </div>
        <div>
            <addformkeluarga :propsAnggota="datakeluarga"></addformkeluarga>
            <listkeluargaComp class="d-none" @updateAnggota="anggUpdate"></listkeluargaComp>
        </div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar.vue'
import listkeluargaComp from '../components/listkeluargaComp.vue'
import addformkeluarga from '../components/addformkeluarga.vue'
export default {
    name : 'lihatAnggotaPage',
    components:{
        addformkeluarga, 
        sidebar, 
        listkeluargaComp
    },
    data(){
        return{
            datakeluarga : null,
        }
    },
    methods:{
        anggUpdate(item){
            this.datakeluarga = item
        }
    }
}
</script>

<style scoped>
.d-none{
    margin-left: 270px;
}

</style>