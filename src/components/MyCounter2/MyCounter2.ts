import { computed, defineComponent, ref } from 'vue';

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
