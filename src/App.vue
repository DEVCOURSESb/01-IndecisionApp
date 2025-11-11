<template>
  <h1>Mi primera app</h1>
  <hr />
  <!-- y se renderiza el componente -->
  <!-- <MyCounter :counter-init="3" /> -->
  <MyCounter2 :counterInit="3" />
</template>

<script setup lang="ts">
// se importa en el script
/* import MyCounter from './components/MyCounter.vue'; */
import MyCounter2 from './components/MyCounter2/MyCounter2.vue';
</script>
