<template>
  <h1>Counter: {{ counter }}</h1>
  <h1>Counter elevado computado: {{ counterElevatedComputed }}</h1>

  <!-- cuando se accede a valores desde el html vue extrae directamente el value -->
  <button @click="counter++">+</button>
  <button @click="counter--">-</button>
</template>

<!-- aplicando el setup directamente desde el script -->
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
// se exporta por default la definicion de componente
export default defineComponent({
  props: {
    counterInit: { type: Number, required: true },
  },

  setup(props) {
    const counter = ref<number>(props.counterInit);
    const counterElevatedComputed = computed(() => counter.value * counter.value);

    return {
      counter,
      counterElevatedComputed,
    };
  },
});
</script>

<!-- con style solo. se aplican los estilos a todo el dom. -->
<!-- con scoped aplica los estilos a solo este SFC SINGLE FILE COMPONENT y agrega un data-v para manejar un correcto scoped -->
<style scoped>
h1 {
  text-shadow: 1px 1px red;
}
</style>
