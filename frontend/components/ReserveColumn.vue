<template>
  <div class="column">
    <reserve-cell
      v-for="i in 48"
      :key="i"
      :row-index="i"
    />
  </div>
</template>

<script>
import ReserveCell from './ReserveCell.vue'

export default {
  components: {
    ReserveCell
  },
  computed: {
    classObject () {
      return {
        subline: ( this.key % 2 === 0 ) && ( this.key % 12 !== 0 ),
        line: ( this.key % 12 === 0 )
      }
    }
  }
}
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  border-left: solid #ccc 1px;
  border-right: solid #ccc 1px;
}
</style>
