<template>
  <div id="app">
    <h1>components -> App.vue (still component, parent component) -> main.js -> index.html</h1>
    <hr/>
    
    <!-- router link -->
    <router-link to="/">Home</router-link>
    <router-link to="/users/10">users 10</router-link>
    <router-link to="/users/12">users 12</router-link>
    
    <!-- router view -->
    <router-view></router-view>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
