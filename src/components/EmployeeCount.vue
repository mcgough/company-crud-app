<template>
  <div>
    <input v-model="updatedCount" type="number" />
    <button @click="emit('submit', updatedCount)">Submit</button>
  </div>
</template>

<script>
import { watch, ref } from '@vue/composition-api';

export default {
  props: ['current'],
  setup(props, { emit }) {
    const updatedCount = ref(0);

    watch(props, (props) => {
      updatedCount.value = props.current;
    });

    return {
      emit,
      updatedCount,
    };
  },
};
</script>

<style></style>
