<template>
<div>
    <div>
        <div class="breadcrumb">
                <div class="d-flex">
                    <div>
                        <router-link to="/home" class="btn btn-16 text-center ">Kembali</router-link>
                    </div>
                    <div>
                        <router-link :to="{name : '/tambahkeluarga', params : $route.params.id}" class="btn btn-success text-white text-center">Tambah Anggota Keluarga</router-link>
                    </div>
                </div>
            </div>
            <div class="tbl">
                <div class="table" >
                    <div>
                        <div class="table table-striped table-bordered table-hover " cellspacing="0">
                                <h1 class="text-center my-4 mt-3">LIST DATA ANGGOTA KELUARGA</h1>
                                    <table class=" table table-striped table-border ">
                                        <thead width="80%">
                                            <tr class="tabletbl text-center">
                                                <th width="1%">No</th>
                                                <th width="2%">Nik</th>
                                                <th width="3%">Nama</th>
                                                <th width="3%">Jenis Kelamin</th>
                                                <th width="2%">Kepala Keluarga</th>
                                                <th width="5%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in datakeluarga" class="text-center" :key="index" width="100%">
                                                <th width="1%">{{ index + 1}}</th>
                                                <td width="2%">{{ item.nik }}</td>
                                                <td width="2%">{{ item.nama }}</td>
                                                <td width="2%">{{ item.jenis_kelamin }}</td>
                                                <td width="2%">{{ item.kepala_keluarga }}</td>
                                                <td class="d-flex justify-content-center" >
                                                    <router-link :to="{ name : 'lihatfams', params: {idk : item.id}}" @click.prevent="$emit('updateAnggota', item)" class="btndetail text-white text-center">Detail</router-link>
                                                    <button class="btn btn-sm btn-danger " @click.prevent="deleteAnggotaFunc(item.id)" >Hapus </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>                                
                                    <div v-if="datakeluarga.length < 1" class=" textbawah d-flex justify-content-center text-white" style="background-color:grey;">Tidak Ada Data</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <formAlert v-show="formAlert" :textAlert="textAlert"></formAlert>
            </div>
</template>

<script>
import anggotaservice from '@/service/anggotaservice'
import formAlert from '../components/formalert.vue'
export default {
    name : 'listKeluargaComp',
    components:{
        formAlert,
    },
    methods:{
        getkeluarga(){
            anggotaservice.getAll()
            .then(response => {
                this.datakeluarga = response.data;
                console.log(this.datakeluarga);
            })
            .catch(e => {
                console.log(e);
            })
        },
    deleteAnggotaFunc(id){
            let scope = this;
            if(confirm("apakah anda akan menghapus data?")){
                anggotaservice.deleteAnggota(id)
                    .then(response => {
                        console.log(response.data);
                        scope.$emit('deleteEmitAnggota');
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }else{
                alert("hapus dibatalkan!")
            }
        },
        getByIdKK(id_kk){
            anggotaservice.getIdKk(id_kk)
            .then(response => {
                this.datakeluarga = response.data;
            })
            .catch(e => {
                console.log(e);
            })
        },
    },
    data(){
        return{
             datakeluarga : [],
             textAlert : "submit",
             formAlert : false
        }
    },
    mounted(){
        if(this.$route.name == '/listanggota'){
            this.getByIdKK(this.$route.params.id)
        }else{
              this.getkeluarga();
        }
    },
    addfams(){
        this.viewForm = true
    }

}
</script>

<style scoped>
.breadcrumb{
    background-color: beige;
    width: 1228px;
    height: 100px;
    margin:5px ;
    padding: 20px;
    border-radius: 10px;
    /* border-bottom-left-radius:35px;
    border-top-right-radius:35px; */
    margin-left: 270px;
}
.tbl{
    background-color: beige;
    width: 1228px;
    margin-left: 270px;
    border-radius: 10px;
    margin-top: 3px;
}
.tabletbl{
    background-color: blue;
    color: white;
}
.satu{
    width: 250px;
    height: 100px;
    background-color:cadetblue;
    margin-top: 50px;
    border-radius: 30px;
    
}
.dua{
    width: 250px;
    height: 100px;
    background-color:cadetblue;
    margin-top: 50px;
    margin-left: 20px;
    border-radius: 30px;
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
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.itu{
    font-size: 30px;
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
.btn-16{
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

.btn-16:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn-16:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-16:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.btn-success{
  align-items: center;
  appearance: none;
  background-color: green;
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

.btn-success:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn-success:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-success:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.table{
    margin: 5px;
    width: 1203px;
    margin-bottom: 5px;
}
.textbawah{
    margin: 5px;
    width: 1220px;
    text-align: center;
}

</style>