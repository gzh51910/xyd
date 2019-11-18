<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  components: {
    // HelloWorld
    // landing,
    // admin
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

body,
html {
  width: 100%;
  height: 100%;
}
</style>
