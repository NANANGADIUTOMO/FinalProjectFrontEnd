<template>
  <div class="register">
    <div>
      <form>
        <div>
          <section class="vh-98">
            <div class="container-fluid h-custom">
              <div
                class="row d-flex justify-content-center align-items-center h-98"
              >
                <div class="col-md-5 col-lg-3 col-xl-5">
                  <img
                    src="../assets/ktp.png"
                    class=""
                    alt="Sample image"
                    width="350px"
                  />
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form @submit.prevent="inputregister">
                    <div class="divider d-flex align-items-center my-4">
                      <p class="text-center fw-bold mx-3 mb-0">Daftar !</p>
                    </div>

                    <div>
                      <div class="comp">
                        <!-- input nama -->
                        <div>
                          <div class="inputGroup">
                            <input
                              v-model="regisdata.nama"
                              type="text"
                              required="Nama Tidak Boleh kosong!"
                              autocomplete="off"
                            />
                            <label for="name">Nama Lengkap</label>
                          </div>
                        </div>

                        <!-- input email -->
                        <div>
                          <div class="inputGroup">
                            <input
                              v-model="regisdata.email"
                              type="text"
                              required=""
                              autocomplete="off"
                            />
                            <label for="name">Alamat Email</label>
                          </div>
                        </div>

                        <!-- input gender -->
                        <div>
                          <div class="inputGroup">
                            <input
                              v-model="regisdata.gender"
                              type="text"
                              required=""
                              autocomplete="off"
                            />
                            <label for="name">Jenis Kelamin</label>
                          </div>
                        </div>

                        <!-- input password -->
                        <div>
                          <div class="inputGroup">
                            <input
                              v-model="regisdata.password"
                              type="password"
                              required=""
                              autocomplete="off"
                            />
                            <label for="name">Password</label>
                          </div>
                        </div>

                        <!-- input repassword -->
                        <div>
                          <div class="inputGroup">
                            <input
                              v-model="password2"
                              type="password"
                              required=""
                              autocomplete="off"
                            />
                            <label for="name">Re-Password</label>
                          </div>
                        </div>
                      </div>

                      <div></div>
                    </div>
                    <div class="d-flex">
                      <div
                        class="text-center text-lg-start pt-2 ml-3 mb-4 mt-2 mr-5"
                      >
                        <router-link
                          to="/"
                          type="button"
                          class="btn btn-danger btn-lg text-center"
                          v-if="btnlogin"
                          >login</router-link
                        >
                      </div>

                      <div
                        class="text-center text-lg-start mt-2 pt-2 mb-5 mr-4"
                      >
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg text-center"
                          v-if="btnregister"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
            >
              <!-- Copyright -->
              <div class="text-white mb-3 mb-md-0">
                Copyright © 2022. Build By Nanang Adi Utomo.
              </div>
            </div>
          </section>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import userservice from "../service/userservice";
export default {
  name: "registerComponent",
  components: {},
  data() {
    return {
      regisdata: {
        email: null,
        nama: null,
        gender: null,
        password: null,
      },
      password2: "",
      btnlogin: true,
      btnregister: true,
    };
  },
  methods: {
    inputregister() {
      let data = this.regisdata;
      let password1 = data.password;
      let password2 = this.password2;
      if (password1 == password2) {
        userservice
          .create(data)
          .then((response) => {
            console.log(response);
            this.regisdata = {};
            this.password2 = "";
            alert("Register Berhasil Silahkan Login!");
          })
          .catch((e) => {
            console.log(e);
            if (e.response.data.status === 500) {
              alert("Alamat email Sudah digunakan");
              location.reload();
            }
          });
      } else {
        alert("Password Tidak Sama !");
        location.reload();
      }
    },
  },
};
</script>

<style scoped>
.register {
  border: 2px solid black;
  border-radius: 8px;
  width: 70%;
  height: 599px;
  margin-left: 15%;
  margin-top: 45px;
  position: absolute;
}

.text {
  margin-left: 39%;
}
.gambar {
  margin-left: 20px;
  margin-top: 35px;
}
.konten {
  display: flex;
}
.input {
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
.comp {
  justify-content: space-evenly;
}

.inputGroup {
  font-family: "Segoe UI", sans-serif;
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
  border-radius: 10px;
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

.inputGroup :is(input:focus, input:valid) ~ label {
  transform: translateY(-50%) scale(0.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: transparent;
}

.inputGroup :is(input:focus, input:valid) {
  border-color: black;
}
.btn-danger {
  margin-right: 27px;
  width: 135px;
}
.btn-primary {
  width: 135px;
}
</style>