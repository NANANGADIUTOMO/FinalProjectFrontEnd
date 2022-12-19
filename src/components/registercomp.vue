<template>
     <div class="register">
        <div>
        <form>
            <div>
                <section class="vh-98">
                    <div class="container-fluid h-custom">
                        <div class="row d-flex justify-content-center align-items-center h-98">
                        <div class="col-md-5 col-lg-3 col-xl-5">
                            <img src="../assets/ktp.png"
                            class="" alt="Sample image" width="350px">
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form @submit.prevent="inputregister">
                            <div class="divider d-flex align-items-center my-4">
                                <p class="text-center fw-bold mx-3 mb-0">Daftar !</p>
                            </div>

                            <div class="d-flex">
                                <div class="comp">
                                    <div>
                                        <div class="form-row mb-2">
                                            <label class="form-label" for="form3Example3">Nama Lengkap</label>
                                            <div class="col-sm-12 ">
                                                <input v-model="regisdata.nama"
                                                type="text"  class="form-control form-control-lg mr-3"
                                                placeholder="Masukkan Nama Anda" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-row mb-2">
                                            <label class="form-label" for="form3Example3">E-mail</label>
                                            <div class="col-sm-12 ">
                                                <input v-model="regisdata.email" 
                                                 type="email"  class="form-control form-control-lg"
                                                placeholder="Masukkan Email anda" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-row mb-2">
                                            <label class="form-label" for="form3Example3">Password</label>
                                            <div class="col-sm-12 ">
                                                <input 
                                                v-model="regisdata.password" 
                                                type="password" id="form3Example3" class="form-control form-control-lg"
                                                placeholder=" Password Anda" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-row mb-2">
                                            <label class="form-label" for="form3Example3">Re-Password</label>
                                            <div class="col-sm-12 ">
                                                <input
                                                v-model="password2"
                                                type="password"  class="form-control form-control-lg"
                                                placeholder="Ulangi Password Anda" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                </div>
                            </div>
                                <p v-if="Success" class="fw-bold mt-2">Berhasil Daftar !, Silahkan Login !</p>
                                <p v-if="emailValid" class="textemail">Email Sudah Digunakan !</p>
                                <p v-if="passwordValid" class="textpass">Password Tidak Sama</p>

                            <div class="d-flex">
                                <div class="text-center text-lg-start pt-2 ml-3 mb-4">
                                    <router-link to="/" type="button" class="btn btn-danger btn-lg text-center"
                                    style="padding-left: 3 .5rem; padding-right: 4rem;" v-if="btnlogin">login</router-link>
                                </div>
                                <div class="text-center text-lg-start mt-4 pt-2 mb-5">
                                    <button type="submit" class="btn btn-primary btn-lg text-center"
                                    style="padding-left: 3 .5rem; padding-right: 2.6rem;" v-if="btnregister">Register</button>
                                </div>
                            </div>

                            </form>
                        </div>
                        </div>
                    </div>
                    <div
                        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                        <!-- Copyright -->
                        <div class="text-white mb-3 mb-md-0">
                        Copyright © 2022. Build By Nanang.
                        </div>
                    </div>
                </section>
            </div>
        </form>
        </div>
    </div>
</template>

<script>

import userservice from '../service/userservice'
export default {
name : 'registerComponent',
components:{
},
data(){
    return{
        regisdata:{
            "email" : null,
            "nama" : null,
            "password" : null
        },
        password2 : "",
        Success : false,
        emailValid : false,
        passwordValid : false,
        btnlogin : false,
        btnregister : true

        
    }
},
methods : {
    inputregister(){
        let data = this.regisdata;
        let password1 = data.password;
        let password2 = this.password2;

        this.Success = false;
        this.emailValid = false;
        this.passwordValid = false;
        if(password1 == password2){
            userservice.create(data)
            .then(response =>{ 
                console.log(response);
                this.regisdata = {};
                this.password2 = "";
                this.Success = true;
                this.btnlogin = true;
                this.btnregister = false
            })
            .catch(e => {
                console.log(e);
                if(e.response.data.status === 500){

                    this.emailValid = true;
                }
            })
        }else{
            this.passwordValid = true;
        }
    }
},
}
</script>

<style scoped>
.register{
    border: 2px solid black;
    border-radius: 8px;
    width: 70%;
    height: 628px;
    margin-left: 15%;
    margin-top: 30px;
    
}
.text{
    margin-left: 39% ;
}
.gambar{
    margin-left: 20px;
    margin-top: 35px;
}
.konten{
    display: flex;
}
.input{
    background-color: bisque;
}

.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
.comp{
    justify-content: space-evenly
    ;
}
.textemail{
    color: red;
}
.textpass{
    color: red;
}

</style>