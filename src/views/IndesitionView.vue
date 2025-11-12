<template>
  <div class="bg-gray-100 h-dvh flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Contacto</span>
    </div>

    <ChatMessages :messages />

    <!-- es indistinto si declaramos una prop con camelCase y la enviamos en kebab-case -->
    <MessageBox @on-send-message="onSendMessage" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useMessages } from '@/composableFunctions/useMessages';

const { messages, onSendMessage } = useMessages();

</script>
