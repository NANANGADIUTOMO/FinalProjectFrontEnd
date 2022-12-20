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
                            <div class="inputGroup">
                                <input v-model="datalogin.email" type="email" required="" autocomplete="off">
                                <label for="name">Alamat Email</label>
                            </div>
                            <!-- <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3">Alamat E-mail</label>
                                <input v-model="datalogin.email"
                                type="email" id="form3Example3" class="form-control form-control-lg"
                                placeholder="Enter a valid email address" required>
                            </div> -->

                            <!-- Password input -->
                            <div class="inputGroup">
                                <input v-model="datalogin.password" type="password" required="" autocomplete="off">
                                <label for="name">Password</label>
                            </div>
                            <!-- <div class="form-outline mb-3">
                                <label class="form-label" for="form3Example4">Password</label>
                                <input v-model="datalogin.password" 
                                 type="password" id="form3Example4" class="form-control form-control-lg"
                                placeholder="Enter password" />
                            </div> -->
                            <P v-if="massage" class="texts">Username atau Password Anda Salah</P>
                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" class="btn btn-primary btn-lg text-center">login</button>
                                    <p class="small fw-bold mt-2 pt-1 mb-0">Belum Memiliki Akun? 
                                        <router-link to="/register" class="link-danger">Buat Akun</router-link></p><p></p>
                                </div>
                            </form>
                        </div>
                        </div>
                       
                    </div>
                    <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
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
        massage : false,
        load : false
    }
},
methods :{
    login (){
        let data = this.datalogin;
        userservice.login(data)
        .then(response =>{
            console.log(response);
            alert("Login Sukses")
            this.$router.push("/home")
        })
        .catch(e =>{
            console.log(e)
            alert("Nama atau Password Salah!")
            // this.massage = true
            location.reload();
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
    margin-top: 45px;
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
.inputGroup {
  font-family: 'Segoe UI', sans-serif;
  margin: 1em 0 1em 0;
  max-width: 300px;
  position: relative;
}

.inputGroup input {
  font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid black;
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
}

.inputGroup label {
  font-size: 100%;
  position: absolute;
  left: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: black;
}

.inputGroup :is(input:focus, input:valid)~label {
  transform: translateY(-50%) scale(.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color:transparent;
}

.inputGroup :is(input:focus, input:valid) {
  border-color: black;
}
.btn-primary{
    width: 274px;
}
.flex-column{
    margin-top: 62px;
    border-bottom-right-radius: 6px 2px;
    border-bottom-left-radius: 3px 4px;
}
</style>