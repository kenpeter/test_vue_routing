<template>
  <div>
    <h1>User page</h1>
    <!-- here we don't use this -->
    <p>Team id is {{ $route.params.id }}</p> 
    <button @click="goHome">go home button</button>  
  </div>
</template>

<script>
// no need data
export default {
  // once watch, created output once
  // also keep watching printing
  watch: {
    "$route" (to, from) {
      console.log("watch");
    }
  },

  // only created, it will not console anything
  created() {
    // here we use this
    // params not param
    console.log("start?");
    console.log(this.$route.params.id);
  },
  
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
}
</script>

