<template>
<div>
    <div>
            <div v-if="!formalert">
                 <div>
                    <div  class="btnatas mt-3 my-lg-3">
                        <router-link to="/home" class=" btn button-30">Kembali</router-link>
                        <button v-show="uptbtn" @click="upttog" class="button-31">Perbarui Data Keluarga</button>
                        <router-link v-show="title != 'Tambah'"  :to="{name : '/listanggota'}" class="button-30">Lihat Anggota Keluarga</router-link>
                    </div>
                    <div>
                        <form class="corn" @submit.prevent="inputkaka">
                            <div class="card-header text=light text-bold">
                                <h3>{{title}} Kartu keluarga</h3>
                            </div>
                            <p></p>
                            <div class="rose shadow ">
                                <div class="mawar">
                                        <div class="form-group row">
                                                <label for="inputPassword" class="col-sm-7 col-form-label mt-2 fw-bold " >Nomor Kartu Keluarga</label>
                                                    <div class="col-sm-12 ">
                                                <input v-model="kakadata.nomor_kk"
                                                type="number" class="form-control" id="inputNomor" :disabled="!disable" required="" placeholder="No KK">
                                                <p v-if="validate" class="textvalidate"><small> Mohon Maaf! Nomor Kartu Keluarga Sudah Digunakan </small></p>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                                <label for="inputAlamat" class="col-sm-7 col-form-label mt-2 fw-bold">Alamat</label>
                                                    <div class="col-sm-12">
                                                <textarea v-model="kakadata.alamat"
                                                    name="" id="" cols="10" rows="4" class="form-control" required :disabled="!disable" placeholder="Alamat"></textarea>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                                <div class="form-group row">
                                                    <label for="inputRt" class="col-sm-2 col-form-label mt-5 fw-bold">Rt</label>
                                                        <div class="col-sm-5">
                                                    <input v-model="kakadata.rt"
                                                    type="number" class="form-control mt-5" id="inputRt" required :disabled="!disable" placeholder="Rt">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                    <label for="inputPassword" class="col-sm-2 col-form-label mt-5 fw-bold">Rw</label>
                                                        <div class="col-sm-5">
                                                    <input v-model="kakadata.rw" 
                                                    type="number" class="form-control mt-5" id="inputRw" required :disabled="!disable" placeholder="Rw">
                                                </div>
                                            </div>
                                        </div>
                                        <p></p>
                                    <div>
                                        <div class="d-flex justify-content-left mx-4 mb-3 mb-lg-4 mt-5">

                                                <button type="button" v-show="updateShow" @click="cancel" class=" btn btn-17">Batal</button>
                                                
                                                <button v-show="title =='Tambah'" class="btn btn-18 btn-lg" >{{buttonValue}}</button>

                                                <button  v-show="updateShow" class="btn btn-19">{{buttonValue}}</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="melati">
                                    <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-7 col-form-label mt-2 fw-bold ">Desa/Kelurahan</label>
                                                <div class="col-sm-12">
                                            <input v-model="kakadata.desa_kelurahan"
                                            type="text" class="form-control" id="inputdesa" required :disabled="!disable" placeholder="Desa/Kelurahan">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-7 col-form-label mt-2 fw-bold ">Kecamatan</label>
                                                <div class="col-sm-12">
                                            <input v-model="kakadata.kecamatan"
                                            type="text" class="form-control " id="inputRw" required :disabled="!disable" placeholder="Kelurahan">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-7 col-form-label mt-2 fw-bold ">Kabupaten / Kota</label>
                                                <div class="col-sm-12">
                                            <input v-model="kakadata.kabupaten_kota"
                                            type="text" class="form-control" id="inputRw" required :disabled="!disable" placeholder="Kabupaten/Kota">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-7 col-form-label mt-2 fw-bold ">Provinsi</label>
                                                <div class="col-sm-12">
                                            <input v-model="kakadata.provinsi"
                                            type="text" class="form-control" id="inputRw" required :disabled="!disable" placeholder="Provinsi">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-7 col-form-label mt-2 fw-bold ">Kode Pos</label>
                                                <div class="col-sm-12">
                                            <input v-model="kakadata.kode_pos" 
                                            type="number" class="form-control" id="inputRw" required :disabled="!disable" placeholder="Kode Pos">
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </form>
                    </div>
                </div>
        </div>
            <formalert v-else :textAlert="textAlert" class="alert"></formalert>
    </div>
</div>
</template>

<script>
import kartuservice from '../service/kartuservice'
import formalert from '@/components/formalert.vue'
export default {
    name : 'addFormComponents',
    components:{
        formalert   
    },
    data(){
        return{
            kakadata:{
                "alamat" : null,
                "desa_kelurahan" : null,
                "kabupaten_kota" : null,
                "kecamatan": null,
                "kode_pos" : null,
                "nomor_kk" : null,
                "provinsi" : null,
                "rt": null,
                "rw" : null
            },
            buttonValue : "submit",
            formalert : false,
            textAlert : "submit",
            title     : "Tambah",
            disable   : false,
            updateShow : false,
            uptbtn     : false,
            validate : false,
        }
    },
    methods : {
        inputkaka(){
            let data = this.kakadata;
            if(this.buttonValue == "submit"){
                kartuservice.create(data)
                    .then(response => {
                        console.log(response.data);
                        this.formalert = true;
                        this.textAlert = "Ditambahkan"
                })
                .catch(e =>{
                    let dudung = e.response.data.trace.includes("duplicate entry");
                    if(dudung){
                        this.validate = false
                    }else{
                        this.validate = true
                    }
                })
            }else{
                kartuservice.updateKaka(data.id, data)
                    .then(response => {
                        console.log(response.data);
                        this.formalert = true;
                        this.textAlert = "Updated"
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
        },
        getKartuById(id){
            kartuservice.getKartuById(id)
            .then(response =>{
                this.kakadata = response.data;
                
            })
            .catch(e => {
                console.log(e);
            })
        },
        upttog(){
            this.disable = true
            this.updateShow = true
            this.uptbtn = false
        },
        cancel(){
            location.reload()
            this.formAlert = false;
        }
    },
    props:['propsKartu'],
    mounted(){
        if(this.$route.name == 'detailKK'){
            this.getKartuById(this.$route.params.id);
            this.buttonValue = "Perbarui"
            this.title = "Detail"
            this.uptbtn = true
        }else if(this.title == 'Tambah'){
            this.disable = true
        }
    },

}
</script>

<style scoped>
.corn{
    width: 1245px;
    height: 592px;
    border: 2px solid burlywood;
    padding: 5px;
    margin-top: 8px;
    border-radius: 10px;
    background-color: white;
    margin-left: 260px;
}
.corn h3{
    margin-left: 20px;
    margin-top: 5px;
}
.btn{
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

.btn:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.bunga{
    background-color: whitesmoke;
    width: 98%;
    height: 600px;
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 10px;
}
.rose{
    border: 2px solid black;
    width: 97%;
    height: 500px;
    margin-top: 25px;
    margin-left: 17px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
}
.melati{
    margin-left: 10%;
}
.conten{
    display: flex;
}

.button-30{
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

.button-30:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.button-31{
  align-items: center;
  appearance: none;
  background-color: #16D207;
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

.button-31:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.button-31:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-31:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.btn-17{
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

.btn-17:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn-17:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-17:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.textvalidate{
    color: red;
}
.btnatas{
    margin-left: 270px;
}
</style>