<template>
  <h3>{{ title }}</h3>
  <input type="text" ref= "name" name="" id="">
  <button @click="handleClick">Click me</button>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      title :"Hellou Vue"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;

}
</style>
