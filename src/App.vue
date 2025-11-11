<template>
  <h1>Hola mundo!!, soy {{ name }}</h1>
  <h1>Hola mundo!!, soy {{ name }}</h1>
  <h1>Hola mundo!!, soy {{ name }}</h1>
  <h1>Hola mundo!!, soy {{ name }}</h1>
</template>

<!-- aplicando el setup directamente desde el script -->
<script lang="ts" setup>
const name: string = 'Beto';
</script>

<!-- con style solo. se aplican los estilos a todo el dom. -->
<!-- con scoped aplica los estilos a solo este SFC SINGLE FILE COMPONENT y agrega un data-v para manejar un correcto scoped -->
<style scoped>
h1 {
  text-shadow: 1px 1px red;
}
</style>
