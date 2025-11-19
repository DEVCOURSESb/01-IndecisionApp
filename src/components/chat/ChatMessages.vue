<template>
  <!-- obtiene la referencia del div en el chatRef -->
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
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
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();

// creando referencia html
const chatRef = ref<HTMLDivElement | null>(null);

// cuando la dependencia cambie, ejecuta la funcion
watch(props.messages, () => {
  /* dando tiempo a que se actualicen valores */
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 300);
});
</script>
