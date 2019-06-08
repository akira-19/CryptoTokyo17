<template>
  <div class="cell" :class="{locked: !isVacancy, selected: isSelected}" />
</template>

<script>
export default {
  data: function () {
    return {
      isVacancy: true,
      isSelected: false
    }
  },
}
</script>

<style scoped>
.cell{
  height: 25px;
  width: 100px;
  background-color: #CFF;
}

.locked{
  background-color: #900;
}

.selected{
  background-color: #6c3
}
</style>
