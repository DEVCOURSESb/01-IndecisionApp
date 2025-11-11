<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div v-for="message in messages" class="flex flex-col gap-2">
      <!-- forma larga -->
      <!-- <ChatBubble :key="message.id" :id="message.id" :its-mmessage.ine="itsMine" :message="message.message" :image="message.image" /> -->
      <ChatBubble :key="message.id" v-bind="message" />
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
