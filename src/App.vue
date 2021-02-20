<template>
  <h3>{{ title }}</h3>
  <Modal header= 'Sign up for Giweaway' />
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: { 
    Modal 
  },
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
