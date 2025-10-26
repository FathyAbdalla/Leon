<template>
  <div class="footer">&copy; {{ date }}-<span>Leon</span>,All Right Reserved</div>
</template>

<script setup>
const date = new Date().getFullYear()
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
