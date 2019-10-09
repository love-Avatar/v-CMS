<template>
  <div>
    <search />
    <showtable />
  </div>
</template>

<script>
import Showtable from './table.vue'
import Search from './search.vue'
export default {
  components: {
    Showtable,
    Search
  }
}
</script>

<style lang="scss" scoped>
</style>
