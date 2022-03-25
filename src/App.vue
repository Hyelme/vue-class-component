<template>
  <div id="app">
    <SearchView/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SearchView from '@/views/SearchView.vue'

@Component({
  components: {
    SearchView
  }
})
export default class App extends Vue{
}
</script>

<style>
#app {
  width: 550px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
