<template>
  <div>
      {{count}}
      <button @click="asdf">add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      count: 0 as number,
    }
  },
  methods: {
    asdf() {
      this.count += 1;
    }
  }
})


// export default {
//   data() {
//     return {
//       count: 0 as number,
//     }
//   },
//   methods: {
//     asdf() {
//       this.count += 1;
//     }
//   },
// }
</script>

<style>

</style>