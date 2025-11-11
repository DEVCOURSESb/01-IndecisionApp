<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Contacto</span>
    </div>

    <ChatMessages :messages />

    <MessageBox />
    
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/ChatMessage';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  { id: new Date().getTime(), itsMine: true, message: 'Hola' },
  { id: new Date().getTime(), itsMine: true, message: 'Hola x2' },
  {
    id: new Date().getTime(),
    itsMine: false,
    message: 'Hola respuesta',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
  },
]);
</script>
