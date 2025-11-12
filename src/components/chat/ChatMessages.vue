<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div v-for="message in messages" :key="message.id" class="flex flex-col">
      <!-- forma larga -->
      <!-- <ChatBubble :id="message.id" :its-mmessage.ine="itsMine" :message="message.message" :image="message.image" /> -->
       <!-- forma corta, se pasa como esparcido el message -->
      <ChatBubble v-bind="message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/ChatMessage';
import ChatBubble from './ChatBubble.vue';

interface Props {
  messages: ChatMessage[];
}

defineProps<Props>();
</script>
