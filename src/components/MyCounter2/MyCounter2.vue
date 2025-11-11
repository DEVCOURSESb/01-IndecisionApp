<template>
  <h1>Counter: {{ counter }}</h1>
  <h1>Counter elevado computado: {{ counterElevatedComputed }}</h1>

  <!-- cuando se accede a valores desde el html vue extrae directamente el value -->
  <button @click="counter++">+</button>
  <button @click="counter--">-</button>
</template>

<!-- se importa directamente desde el script -->
<script lang="ts" src="./MyCounter2.ts"></script>

<!-- con style solo. se aplican los estilos a todo el dom. -->
<!-- con scoped aplica los estilos a solo este SFC SINGLE FILE COMPONENT y agrega un data-v para manejar un correcto scoped -->
<style scoped>
h1 {
  text-shadow: 1px 1px red;
}
</style>
