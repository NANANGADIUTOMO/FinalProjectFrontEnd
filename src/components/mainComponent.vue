<template>
<div>
    <div>
        <div class="breadcrumb">
                    <div class="isi">
                            <h1 class="display-">Halaman Beranda</h1>
                        <div class="ctn">
                            <div class="satu shadow" >
                                <p>Jumlah Kartu keluarga</p>
                                <p class="ini">{{kakadata.length}}</p>
                            </div>
                            <p></p>
                            <div class="dua shadow">
                                <p>Jumlah Seluruh Warga</p>
                                <p class="itu">{{dataWarga.length}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="table mt-3">
                        <div class="table table-striped table-bordered table-hover mt-4" cellspacing="0">
                            <h1 class="text-center my-4">DATA KARTU KELUARGA</h1>
                                <table class="table table-striped table-border ">
                                    <thead>
                                        <tr class="table-success text-center ">
                                            <th scope="col-3">No</th>
                                            <th scope="col">Nomor KK</th>
                                            <th scope="col">Alamat</th>
                                            <th scope="col">Kota Kode pos</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item, index) in kakadata" :key="index" class="text-center">
                                        <th>{{index + 1}}</th>
                                        <td>{{item.nomor_kk}}</td>
                                        <td>{{item.alamat}}</td>
                                        <td>{{item.kode_pos}}</td>
                                        <td class="d-flex justify-content-center">
                                            <router-link :to="{ name : 'detailKK', params: {id : item.id}}" @click.prevent="$emit('updateKaka', item)" class="btndetail btn-pryimary text-center text-white">Detail</router-link>
                                            <button class="btn btn-sm btn-danger " @click.prevent="deleteKartufunc(item.id)" >Hapus </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div v-if="kakadata.length < 1" class=" d-flex justify-content-center text-center" style="background-color:grey;">Tidak Ada Data</div>
                        </div>
                    </div>
                <div>
            </div>
        </div>
    </div>
    <formAlert v-show="formAlert" :textAlert="textAlert" class="alert"></formAlert>
</div>
  
</template>

<script>
import kartuservice from '@/service/kartuservice'
import formAlert from '../components/formalert.vue'
import anggotaservice from '@/service/anggotaservice'
export default {
    name : 'mainComponent',
    components:{
        formAlert
    },
    methods:{
        getKartu(){
            kartuservice.getAll()
                .then(response => {
                    this.kakadata = response.data;
                })
                .catch(e => {
                    console.log(e);
                })
        },
        deleteKartufunc(id){
            let scope = this;
            if(confirm("apakah anda akan menghapus data?")){
                kartuservice.deleteKaka(id)
                    .then(response => {
                        anggotaservice.deleteByIdKk(id)
                        .then(response =>{
                            console.log(response.data);
                        })
                        console.log(response.data); 
                        scope.$emit('deleteEmit');
                    })
                    .catch(e => {
                        console.log(e);
                    })
            
            }else{
                alert("hapus dibatalkan!")
            }
        },
        getwarga(){
            anggotaservice.getAll()
                .then(response => {
                    this.dataWarga = response.data;
            })
            .catch(e => {
                console.log(e);
            })
        }
    },
    mounted(){
        this.getKartu();
        this.getwarga();
    },
    data(){
        return{
            kakadata : [],
            formAlert : false,
            textAlert : "submit",
            dataWarga : [],
        }
    },

}
</script>

<style scoped>
.homep{
    font-family: Lucida Bright;
    font-size: 40px;
}
.breadcrumb{
    background-color: beige;
    width: 1235px;
    height: 220px;
    margin:5px ;
    padding: 20px;
    border-radius: 10px;
}
.satu{
    width: 250px;
    height: 100px;
    background-color:cadetblue;
    margin-top: 20px;
    border-radius: 30px;
}
.satu:hover{
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
    transform: translateY(-2px);
}
.dua{
    width: 250px;
    height: 100px;
    background-color:cadetblue;
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 30px;
}
.dua:hover{
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
    transform: translateY(-2px);
}
.tiga{
    width: 200px;
    height: 50px;
    margin: 0;
}
.ctn{
    display: flex;
    
}
.satu p{
    margin-left: 20px;
    margin-top: 10px;
    font-family: 'Arial Narrow Bold';
    font-size: 20px;
}
.dua p{
    margin-left: 20px;
    margin-top: 10px;
    font-family: 'Arial Narrow Bold';
    font-size: 20px;
}
.ini{
    font-size: 200px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.itu{
    font-size: 50px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
}
.btndetail{
  align-items: center;
  appearance: none;
  background-color: blue;
  border-radius: 20px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,black 0 -3px 0 inset;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  margin-right: 10px;
}

.btndetail:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btndetail:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btndetail:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.btn-danger{
 align-items: center;
  appearance: none;
  background-color: red;
  border-radius: 20px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,black 0 -3px 0 inset;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  margin-right: 10px;
}

.btn-danger:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn-danger:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-danger:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.isi h4{
    font-family: 'Arial Narrow Bold';
    font-size: 27px;
}

</style>