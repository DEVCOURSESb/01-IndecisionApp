<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble :its-mine="true" message="Hola mundo" />
      <ChatBubble :its-mine="false" message="Hola mundo respuesta" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
</script>
