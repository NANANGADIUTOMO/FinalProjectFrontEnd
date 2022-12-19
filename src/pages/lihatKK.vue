<template>
<div>
    <div class="d-flex">
        <div>
            <sidebar></sidebar>
        </div>
        <div>
            <addform :propsKartu="kakadata"></addform>
            <mainComponent class="d-none" @updateKaka="kakaupdate"></mainComponent>
        </div>
    </div>
</div>
</template>

<script>
import addform from '../components/addform.vue'
import mainComponent from '../components/mainComponent.vue'
import sidebar from '../components/sidebar.vue'
export default {
    name: 'lihatKKPage',
    components: {
        sidebar,
        addform,
        mainComponent
    },
    data(){
        return{
            kakadata : null,
        }
    },
    methods:{
        kakaupdate(item){
            this.kakadata = item
        }
    }
}
</script>

<style scoped>
.breadcrumb{
    background-color: beige;
    width: 100%;
    height: 800px;
    margin:5px ;
    padding: 20px;
    border-radius: 10px;
}
.ctn{
    
    margin-top: 35px;
    margin-left: 0;
}
.btn-primary{
    margin-right: 20px;
}
.btn-secondary{
    margin-right: 20px;
}
.form{
    border: 2px solid black;
    width: 500px;
    height: 500px;
}
.melati{
    margin-left: 30px;
}
.rose{
    display: flex;
    border: 2px solid black;
    margin-top: 5%;
    padding: 5%;
    border-radius:10px ;
}
</style>