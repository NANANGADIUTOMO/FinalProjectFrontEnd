<template>
    <div class="alert">
        <h3>Sukses !</h3>
        <p></p>
        <p>Data berhasil {{textAlert}} !</p>
        <p></p><p></p>
        <router-link v-show="!showButton" to="/home" class="btn btn-13 mt-3">Keuar</router-link>
        <button v-show="showButton" class="btn btn-12 text-center" @click="reloadFunc">Kembali</button>
    </div>
</template>

<script>
export default {
name: 'formalertComponent',
props: ['textAlert'],
data(){
    return{
        showButton : false,
        back : false,
    }
},
mounted(){
    if(this.$route.path === "/home"){
        this.showButton = true;
    }
},
methods: {
    reloadFunc(){
        location.reload();
    }
}

}
</script>

<style scoped>
.alert{
    width: 570px;
    height: 190px;
    background-color: azure;
    margin-top: 20%;
    margin-left: 27%;
}
.btn-13{
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

.btn-13:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn-13:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-13:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
.btn-12{
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

.btn-12:focus {
  box-shadow: black 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
}

.btn-12:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, black 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-12:active {
  box-shadow: black 0 3px 7px inset;
  transform: translateY(2px);
}
</style>