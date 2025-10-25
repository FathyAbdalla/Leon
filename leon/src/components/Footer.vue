<template>
  <div class="footer">&copy; 2019-<span>Leon</span>,All Right Reserved</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.footer {
  text-align: center;
  background-color: var(--second-color);
  color: white;
  padding: 30px;
}

.footer span {
  color: var(--main-color);
}
</style>
