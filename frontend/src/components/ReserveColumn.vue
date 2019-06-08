<template>
  <div class="column">
    <reserve-cell v-for="i in 48" :key="i" />
  </div>
</template>

<script>
import ReserveCell from './ReserveCell.vue'

export default {
  components: {
    ReserveCell
  }
}
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
}
</style>
