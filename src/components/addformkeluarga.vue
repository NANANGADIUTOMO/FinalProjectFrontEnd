<template>
<div>
    <div v-if="!formalertanggota">
        <div>
            <form class="corn" @submit.prevent="inputkeluarga">
                    <h3>{{title}} Anggota keluarga</h3>
                    <p></p>
                        <div class="d-flex justify-content-left mx-4 mt-3 mb-lg-4">
                            <router-link :to="{name : '/listanggota'}" class="btn btn-15 btn-lg">Kembali</router-link>
                            <button v-show="uptbutton" @click="updttogg" type="button"  class="button-30">Perbarui Data Keluarga</button>
                        </div>
                    <div class="rose shadow">
                        <div class="mawar">
                                <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-7 col-form-label mt-2 fw-bold " required>NIK</label>
                                            <div class="col-sm-12">
                                        <input v-model="datakeluarga.nik" 
                                        type="number" class="form-control" id="inputNomor" :disabled="!disable" placeholder="Masukkan Nik">
                                        <p v-if="validate2" class="textwarning"> <small>Maaf! Nomor NIK Anda Sudah Digunakan</small> </p>
                                    </div>
                                </div>
                                <div class="form-group row">
                                        <label for="inputAlamat" class="col-sm-7 col-form-label mt-2 fw-bold">Nama</label>
                                            <div class="col-sm-12">
                                                <input v-model="datakeluarga.nama"
                                                type="text" class="form-control" id="inputNomor" :disabled="!disable" placeholder="Masukkan Nama">
                                            </div>
                                </div>
                                        <div class="form-group row">
                                            <div class="col-sm-12 col-form-label mt-2 fw-bold">
                                                <label for="">Jenis Kelamin</label>
                                                <div class="col-sm-12">
                                                    <select v-model="datakeluarga.jenis_kelamin"
                                                        class="form-control mt-2" id="inputGroupSelect01" required :disabled="!disable" placeholder="Jenis Kelamin">
                                                        <option selected disabled>--Pilih--</option>
                                                        <option value="Pria">Pria</option>
                                                        <option value="Wanita">Wanita</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-7 col-form-label mt-3 fw-bold " required >Tempat Lahir</label>
                                            <div class="col-sm-12">
                                        <input v-model="datakeluarga.tempat_lahir"
                                        type="text" class="form-control" id="inputNomor" :disabled="!disable" placeholder="Tempat Lahir">
                                    </div>
                                </div>
                            <div>
                                
                                <div class="d-flex justify-content-left mx-4 mb-3 mb-lg-4 mt-3">
                                        <button type="button" v-show="updtShow" @click="kancel" class="btn btn-21 btn-lg" >Batal</button>

                                        <button v-show="title =='Tambah'" class="btn btn-14 btn-lg" >{{buttonValue}}</button>

                                        <button  v-show="updtShow" @click="clikk" class="btn btn-20">{{buttonValue}}</button>
                                </div>
                            </div>
                        </div>

                        <div class="melati">
                            <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-7 col-form-label mt-2 fw-bold ">Tanggal Lahir</label>
                                        <div class="col-sm-12">
                                    <input v-model="datakeluarga.tanggal_lahir"
                                    type="date" class="form-control" id="inputdesa" :disabled="!disable" >
                                </div>
                            </div>
                            <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-7 col-form-label mt-2 fw-bold ">Agama</label>
                                        <div class="col-sm-12">
                                                    <select v-model="datakeluarga.agama"
                                                        class="form-control" id="inputGroupSelect01" required :disabled="!disable" placeholder="Agama">
                                                        <option selected disabled>--Pilih--</option>
                                                        <option value="Islam">Islam</option>
                                                        <option value="Hindu">Hindu</option>
                                                        <option value="Budha">Budha</option>
                                                        <option value="Konghucu">Konghucu</option>
                                                        <option value="Kristen">Kristen</option>
                                                        <option value="Katholik">Katholik</option>
                                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-7 col-form-label mt-2 fw-bold ">Pendidikan</label>
                                        <div class="col-sm-12">
                                    <input v-model="datakeluarga.pendidikan"
                                    type="text" class="form-control" id="inputRw" :disabled="!disable" placeholder="Pendidikan">
                                </div>
                            </div>
                                <div class="form-group row">
                                <label for="inputPassword" class="col-sm-7 col-form-label mt-4 fw-bold ">Kepala Keluarga</label>
                                        <div class="col-sm-12">
                                                    <select v-model="datakeluarga.kepala_keluarga"
                                                        class="form-control" required :disabled="!disable" placeholder="Kepala Keluarga">
                                                        <option selected disabled>--Pilih--</option>
                                                        <option value="Yes">Ya</option>
                                                        <option value="No">Tidak</option>
                                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>   
                </form>
            </div>
    </div>
        <formalertanggota v-else :textAlertkelu="textAlertkelu"></formalertanggota>
</div>
  
</template>

<script>
import anggotaservice from '../service/anggotaservice'
import formalertanggota from '../components/formalertanggota.vue'
export default {
    name: 'addFormKeluargaComponent',
    components:{
        formalertanggota
    },
    data(){
        return{
            datakeluarga:{
                "agama" : null,
                "id_kk" : null,
                "jenis_kelamin" : null,
                "kepala_keluarga" : null,
                "nama" : null,
                "nik" : null,
                "pendidikan" : null,
                "tempat_lahir" : null,
                "tanggal_lahir" : null
            },
            buttonValue : "submit",
            formalertanggota : false,
            textAlertkelu : "submit",
            title : "Tambah", 
            disable : false,
            updtShow : false,
            uptbutton : false,
            validate2 : false
        }
    },
    methods: {
        inputkeluarga(){
            this.datakeluarga.id_kk = this.$route.params.id
            let data = this.datakeluarga;
            
            if(this.buttonValue == "submit"){
                anggotaservice.create(data)
                .then(response => {
                    console.log(response.data);
                    this.formalertanggota = true;
                    this.textAlertkelu = "Ditambahkan"
                })
                .catch(e => {
                    let dadang = e.response.data.trace.includes("Duplicate Entry");
                    if(dadang){
                        this.validate2 = false;
                    }else{
                        this.validate2 = true;
                    }
                })
            }else{
                anggotaservice.updateAnggota(data.id, data)
                .then(response => {
                    console.log(response.data);
                    this.formalertanggota = true;
                    this.textAlertkelu = "Updated"
                })
                .catch(e => {
                    console.log(e)
                })
            }
        },
        updttogg(){
            this.disable = true;
            this.updtShow = true;
            this.uptbutton = false
        },
        kancel(){
            location.reload();
            
        },
        clikk(){
            this.datakeluarga.id_kk = this.$route.params.id
        },
        getAnggotaById(id){
            anggotaservice.getAnggotaById(id)
            .then(response => {
                this.datakeluarga = response.data
            })
            .catch(e =>{
                console.log(e);
            })
        },
    },
    props :['propsAnggota',],
    mounted(){
        if(this.$route.name == 'lihatfams'){
            this.getAnggotaById(this.$route.params.idk);
            this.buttonValue = "update"
            this.title = "Detail"
            this.uptbutton = true
        }else if(this.title == 'Tambah'){
            this.disable = true;
        }

        }
    }
</script>

<style scoped>
.corn{
    width: 1250px;
    height: 675px;
    border: 2px solid burlywood;
    padding: 5px;
    margin-top: 5px;
    border-radius: 10px;
    background-color: white;
    margin-left: 260px;
}
.corn h3{
    margin-left: 20px;
    margin-top: 5px;
    font-family: Lucida Bright;
    font-size: 40px;
}
.btn{
    margin-left: 17px;
    margin-top: 5px;
    background-color: blue;
    color: white;
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
    width: 99%;
    height: 496px;
    margin-top: 2px;
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
.btn-15{
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
  margin-bottom: 0;
}

.btn-15:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn-15:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-15:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.btn-21{
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

.btn-21:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn-21:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-21:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.button-30{
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
  margin-top: 5px;
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
.btn-20{
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
  margin-top: 5px;
}

.btn-20:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn-20:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-20:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.btn-14{
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
  margin-top: 5px;
}

.btn-14:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn-14:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-14:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.textwarning{
    color: red;
}
</style> 