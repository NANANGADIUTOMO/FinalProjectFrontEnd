<template>
    <div>
        <div class="d-flex">
            <sidebar></sidebar>
            <addform class="addform"></addform>
        </div>
    </div>
</template>

<script>
import addform from '../components/addform.vue'
import sidebar from '../components/sidebar.vue'
export default {
    name: 'tambahKKPage',
    components :{
        sidebar,
        addform
    },

}
</script>

<style scoped>
.addform{
    margin-left: 9px; 
    
}

</style>