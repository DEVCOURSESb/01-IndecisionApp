import type { ChatMessage } from '@/interfaces/ChatMessage';
import { ref } from 'vue';

export const useMessages = () => {
  const createUUID = () => {
    return new Date().getTime();
  };

  const messages = ref<ChatMessage[]>([
    { id: createUUID(), itsMine: true, message: 'Hola' },
    { id: createUUID(), itsMine: true, message: 'Hola x2' },
    { id: createUUID(), itsMine: false, message: 'Hola respuesta', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', },
  ]);

  /**
   * declaracion de función para agregar un mensaje a la lista reactiva
   * @param message a agregar
   */
  const onSendMessage = (message: string) => {
    messages.value.push({
      id: createUUID(),
      itsMine: true,
      message,
    });
  };

  return {
    createUUID,
    messages,
    onSendMessage
  };
};
