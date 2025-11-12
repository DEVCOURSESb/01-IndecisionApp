<template>
  <div class="bg-gray-100 h-dvh flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Contacto</span>
    </div>

    <ChatMessages :messages />

    <!-- es indistinto si declaramos una prop con camelCase y la enviamos en kebab-case -->
    <MessageBox @on-send-message="onSendMessageFather" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useMessages } from '@/composableFunctions/useMessages';
import type { ChatMessage } from '@/interfaces/ChatMessage';
import { ref } from 'vue';


const { createUUID } = useMessages();

const messages = ref<ChatMessage[]>([
  { id: createUUID(), itsMine: true, message: 'Hola' },
  { id: createUUID(), itsMine: true, message: 'Hola x2' },
  { id: createUUID(), itsMine: false, message: 'Hola respuesta', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',},
]);

/**
 * declaracion de función para agregar un mensaje a la lista reactiva
 * @param message a agregar
 */
const onSendMessageFather = (message: string) => {
  messages.value.push({
    id: createUUID(),
    itsMine: true,
    message,
  });
};
</script>
