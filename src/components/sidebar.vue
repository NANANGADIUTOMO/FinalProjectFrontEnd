<template>
<div>
    <div class="sidebar shadow">
        <div>
            <div class="text">
                <img src="" alt="">
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
    margin-top: 30%;
    margin-left: 9%;
}
.home{
    /* background-color: white; */
    width: 200px;
    height: 50px;
    border-radius: 9px;
    font-family: 'Arial Narrow Bold';
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
</style>