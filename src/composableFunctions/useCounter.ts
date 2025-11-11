import { computed, ref } from 'vue';

export const useCounter = (initialValue: number) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value * counter.value);

  const incrementCounter = () => {
    counter.value++;
  };

  const decrementCounter = () => {
    counter.value++;
  };

  return {
    counter,
    squareCounter,
    incrementCounter,
    decrementCounter,
  };
};
