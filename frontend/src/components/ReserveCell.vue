<template>
  <div
    class="cell"
    :class="{
      locked: !isVacancy,
      selected: isSelected,
      ...classObject,
    }"
    @click="isSelected = !isSelected"
  ><slot /></div>
</template>

<script>
export default {
  data: function () {
    return {
      isVacancy: true,
      isSelected: false
    }
  },
  props: {
    rowIndex: Number
  },
  computed: {
    classObject () {
      return {
        subline: ( this.rowIndex % 2 === 0 ) && ( this.rowIndex % 12 !== 0 ),
        line: ( this.rowIndex % 12 === 0 ),
        topline: ( this.rowIndex === 1 ),
      }
    }
  }
}
</script>

<style scoped>
.cell{
  height: 20px;
  width: 100px;
  background-color: #CFF;
}

.locked{
  background-color: #900;
}

.selected{
  background-color: #6c3
}

.subline {
  border-bottom: solid #ccc 1px;
}

.line {
  border-bottom: solid #ccc 2px;
}

.topline {
  border-top: solid #ccc 2px;
}
</style>
