<script setup lang="ts">
import RecievedMessage from './RecievedMessage.vue';
import SendMessage from './SendMessage.vue';
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <SendMessage />
      <RecievedMessage />
    </div>
  </div>
</template>
