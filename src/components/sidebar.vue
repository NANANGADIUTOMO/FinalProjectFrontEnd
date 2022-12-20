<template>
<div>
    <div class="sidebar shadow">
        <div>
            <div class="text">
                <div class="load">
                    <div class="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        </div>
                </div>
                <div class="text">
                    <h1>E-KTP</h1>
                </div>
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
    margin-top: 20px;
    
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
    margin-top: 130%;
}
.out:hover{
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
    transform: translateY(-2px);
}
.load{
    margin-top: 30px;
    margin-left: 43%;
    margin-bottom: 10px;
}
.spinner {
 width: 44px;
 height: 44px;
 animation: spinner-y0fdc1 2s infinite ease;
 transform-style: preserve-3d;
}

.spinner > div {
 background-color: rgba(0,77,255,0.2);
 height: 100%;
 position: absolute;
 width: 100%;
 border: 2px solid #004dff;
}

.spinner div:nth-of-type(1) {
 transform: translateZ(-22px) rotateY(180deg);
}

.spinner div:nth-of-type(2) {
 transform: rotateY(-270deg) translateX(50%);
 transform-origin: top right;
}

.spinner div:nth-of-type(3) {
 transform: rotateY(270deg) translateX(-50%);
 transform-origin: center left;
}

.spinner div:nth-of-type(4) {
 transform: rotateX(90deg) translateY(-50%);
 transform-origin: top center;
}

.spinner div:nth-of-type(5) {
 transform: rotateX(-90deg) translateY(50%);
 transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
 transform: translateZ(22px);
}

.spinner {
 width: 44px;
 height: 44px;
 animation: spinner-y0fdc1 2s infinite ease;
 transform-style: preserve-3d;
}

.spinner > div {
 background-color: rgba(0,77,255,0.2);
 height: 100%;
 position: absolute;
 width: 100%;
 border: 2px solid #004dff;
}

.spinner div:nth-of-type(1) {
 transform: translateZ(-22px) rotateY(180deg);
}

.spinner div:nth-of-type(2) {
 transform: rotateY(-270deg) translateX(50%);
 transform-origin: top right;
}

.spinner div:nth-of-type(3) {
 transform: rotateY(270deg) translateX(-50%);
 transform-origin: center left;
}

.spinner div:nth-of-type(4) {
 transform: rotateX(90deg) translateY(-50%);
 transform-origin: top center;
}

.spinner div:nth-of-type(5) {
 transform: rotateX(-90deg) translateY(50%);
 transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
 transform: translateZ(22px);
}

@keyframes spinner-y0fdc1 {
 0% {
  transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
 }

 50% {
  transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
 }

 100% {
  transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
 }
}
</style>