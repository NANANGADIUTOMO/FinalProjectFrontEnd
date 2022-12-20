<template>
<div>
    <div class="sidebar shadow">
        <div>
            <div class="text">
                <div class="load">
                    <div class="loader">
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                        <div class="loader-square"></div>
                    </div>
                </div>
                <h1>E-KTP APP</h1>
            </div>
            <div class="link">
                <div class="home">
                    <p class=" text-center shadow"><router-link to="/home" ><h5><img src="../assets/home.png" alt="" width="25px" class="justify-content-center">Beranda</h5> </router-link></p>
                </div>
                <div class="tambah">
                    <p class=" text-center shadow "><router-link to="/addKK" ><h5><img src="../assets/plus.png" alt="" width="22px">Tambah KK</h5></router-link></p>
                </div>
                <div class="out">
                    <p class="out text-center shadow"><router-link to="/"><h5>Keluar</h5> </router-link></p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : 'sidebarComponent'
}
</script>

<style scoped>
.sidebar{
    background-color: cadetblue;
    width: 250px;
    height: 675px;
    margin: 5px;
    border-radius: 10px;
    position: fixed;
    
}
.text{
    font-family:'Arial Narrow Bold';
    text-decoration-line :underline;
    text-align: center;
    margin-top: 30px;
    
}
a{
    text-decoration: none;
    color: black;
}

.link{
    margin-top: 20%;
    margin-left: 9%;
}
.home{
    /* background-color: white; */
    width: 200px;
    height: 50px;
    border-radius: 9px;
    font-family: 'Arial Narrow Bold';
    margin-top: 10px;
}
.home:hover{
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
    transform: translateY(-2px);
}
.tambah{
    /* background-color: white; */
    width: 200px;
    height: 50px;
    border-radius: 9px;
    margin-top: 10px;
    font-family: 'Arial Narrow Bold';
}
.tambah:hover{
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
    transform: translateY(-2px);
    
}
.out{
    /* background-color: white; */
    width: 200px;
    height: 50px;
    border-radius: 9px;
    font-family: 'Arial Narrow Bold';
    margin-top: 115%;
}
.out:hover{
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
    transform: translateY(-2px);
}
.load{
    margin-left: 66px;
    margin-top: 20px;
}
@keyframes square-animation {
 0% {
  left: 0;
  top: 0;
 }

 10.5% {
  left: 0;
  top: 0;
 }

 12.5% {
  left: 32px;
  top: 0;
 }

 23% {
  left: 32px;
  top: 0;
 }

 25% {
  left: 64px;
  top: 0;
 }

 35.5% {
  left: 64px;
  top: 0;
 }

 37.5% {
  left: 64px;
  top: 32px;
 }

 48% {
  left: 64px;
  top: 32px;
 }

 50% {
  left: 32px;
  top: 32px;
 }

 60.5% {
  left: 32px;
  top: 32px;
 }

 62.5% {
  left: 32px;
  top: 64px;
 }

 73% {
  left: 32px;
  top: 64px;
 }

 75% {
  left: 0;
  top: 64px;
 }

 85.5% {
  left: 0;
  top: 64px;
 }

 87.5% {
  left: 0;
  top: 32px;
 }

 98% {
  left: 0;
  top: 32px;
 }

 100% {
  left: 0;
  top: 0;
 }
}

.loader {
 position: relative;
 width: 96px;
 height: 96px;
 transform: rotate(45deg);
}

.loader-square {
 position: absolute;
 top: 0;
 left: 0;
 width: 28px;
 height: 28px;
 margin: 2px;
 border-radius: 0px;
 background: white;
 background-size: cover;
 background-position: center;
 background-attachment: fixed;
 animation: square-animation 10s ease-in-out infinite both;
}

.loader-square:nth-of-type(0) {
 animation-delay: 0s;
}

.loader-square:nth-of-type(1) {
 animation-delay: -1.4285714286s;
}

.loader-square:nth-of-type(2) {
 animation-delay: -2.8571428571s;
}

.loader-square:nth-of-type(3) {
 animation-delay: -4.2857142857s;
}

.loader-square:nth-of-type(4) {
 animation-delay: -5.7142857143s;
}

.loader-square:nth-of-type(5) {
 animation-delay: -7.1428571429s;
}

.loader-square:nth-of-type(6) {
 animation-delay: -8.5714285714s;
}

.loader-square:nth-of-type(7) {
 animation-delay: -10s;
}

</style>