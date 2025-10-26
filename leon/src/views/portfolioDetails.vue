<template>
  <div>
    <h3>project {{ id }} details</h3>
  </div>
</template>

<script>
export default {
  props: ['id'],
}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
  height: 500px;
}
h3 {
  color: white;
}
</style>
