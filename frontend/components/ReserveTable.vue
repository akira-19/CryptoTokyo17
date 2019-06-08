<template>
  <div class="table">
    <reserve-column v-for="i in 7" :key="i" />
  </div>
</template>

<script>
import ReserveColumn from './ReserveColumn.vue'

export default {
  components: {
    ReserveColumn
  }
}
</script>

<style scoped>
.table {
  display: flex;
}
</style>
