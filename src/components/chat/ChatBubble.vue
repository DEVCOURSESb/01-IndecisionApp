<template>
  <div v-if="itsMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>
  <div v-else="itsMine" class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <img
        v-if="image"
        :src="image"
        alt="Imagen respuesta del servidor"
        class="w-52 h-52 rounded-md object-cover"
      />
    </div>
  </div>
</template>

<!-- script setup -->
<script lang="ts" setup>
interface Props {
  message: string;
  itsMine: boolean;
  image?: string;
}

/* definicion de props */
defineProps<Props>();
</script>
