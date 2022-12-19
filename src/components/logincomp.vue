<template>
    <div class="login">
        <form>
            <div>
                <section class="vh-98">
                    <div class="container-fluid h-custom">
                        <div class="row d-flex justify-content-center align-items-center h-98">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="../assets/ktp.png"
                            class="img-fluid" alt="Sample image">
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form @submit.prevent="login">
                            <div class="divider d-flex align-items-center my-4">
                                <p class="text-center fw-bold mx-3 mb-0">Selamat Datang !</p>
                            </div>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3">Alamat E-mail</label>
                                <input v-model="datalogin.email"
                                type="email" id="form3Example3" class="form-control form-control-lg"
                                placeholder="Enter a valid email address" required>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-3">
                                <label class="form-label" for="form3Example4">Password</label>
                                <input v-model="datalogin.password" 
                                 type="password" id="form3Example4" class="form-control form-control-lg"
                                placeholder="Enter password" />
                            </div>
                            <P v-if="massage" class="texts">Username atau Password Salah</P>
                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" class="btn btn-primary btn-lg text-center"
                                style="padding-left: 3 .5rem; padding-right: 13rem;">login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Belum Memiliki Akun? 
                                    <router-link to="/register" class="link-danger">Buat Akun</router-link></p><p></p>
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
</template>

<script>
import userservice from '@/service/userservice';
export default {
name:'loginComponent',
data (){
    return{
        datalogin:{
            "email" : null,
            "password" : null,
        },
        massage : false
    }
},
methods :{
    login (){
        let data = this.datalogin;
        userservice.login(data)
        .then(response =>{
            console.log(response);
            this.$router.push("/home")
        })
        .catch(e =>{
            console.log(e)
            this.massage = true
        })
    }
}
  }

</script>

<style scoped>  
.login{
    border: 2px solid black;
    border-radius: 8px;
    width: 900px;
    height: 461px;
    margin-left: 20%;
    margin-top: 7%;
}
.texts{
    color: red;
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

</style>