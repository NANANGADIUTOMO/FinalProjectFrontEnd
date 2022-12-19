<template>
<div>
    <div class="d-flex">
        <div>
            <sidebar></sidebar>
        </div>
        <div>
            <addformkeluarga></addformkeluarga>
        </div>
    </div>
</div>
  
</template>

<script>
import addformkeluarga from '../components/addformkeluarga.vue'
import sidebar from '../components/sidebar.vue'
export default {
    name: 'tambahKeluargaPages',
    components :{
        addformkeluarga,sidebar
    }

}
</script>

<style>

</style>