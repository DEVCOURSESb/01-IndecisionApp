import { useCounter } from '@/composableFunctions/useCounter';
import { defineComponent, } from 'vue';

export default defineComponent({
  props: {
    counterInit: { type: Number, required: true },
  },

  setup(props) {
    const { counter, squareCounter, incrementCounter, decrementCounter } = useCounter(
      props.counterInit,
    );

    return {
      counter,
      squareCounter,
      incrementCounter,
      decrementCounter,
    };
  },
});
