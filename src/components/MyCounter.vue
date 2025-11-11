<template>
  <h1>Counter: {{ counter }}</h1>
  <h1>Counter elevado computado: {{ squareCounter }}</h1>

  <!-- cuando se accede a valores desde el html vue extrae directamente el value -->
  <button @click="incrementCounter">+</button>
  <button @click="decrementCounter">-</button>
</template>

<!-- aplicando el setup directamente desde el script -->
<script lang="ts" setup>
import { useCounter } from '@/composableFunctions/useCounter';

const { counter, squareCounter, incrementCounter, decrementCounter } = useCounter(1);
</script>
