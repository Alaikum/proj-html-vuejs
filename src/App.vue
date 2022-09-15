<template>
  <div id="app">
       <NewHeader/>
    <NewMain/>
    <NewFooter/>
  </div>
</template>

<script>

import NewHeader from './components/NewHeader.vue';
import NewMain from './components/NewMain.vue';
import NewFooter from './components/NewFooter.vue';

export default {
  name: 'App',
  components: {

    NewHeader,
    NewMain,
    NewFooter
}
}
</script>

<style lang="scss">
   @import "../src/style/general.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
