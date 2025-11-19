import type { ChatMessage } from '@/interfaces/ChatMessage';
import type { YesNoResponse } from '@/interfaces/YesNoResponse';
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

  const getHerResponse = async () => {
    const response = await fetch("https://yesno.wtf/api");
    // como no se puede tipar el resultado, se indica que trate como
    const data = (await response.json()) as YesNoResponse;
    return data;
  }

  /**
   * declaracion de función para agregar un mensaje a la lista reactiva
   * @param message a agregar
   */
  const onSendMessage = async (message: string) => {
    messages.value.push({
      id: createUUID(),
      itsMine: true,
      message,
    });

    if(!message.endsWith('?')) return;

    const { answer, image } = await getHerResponse();

    messages.value.push({ id: createUUID(), itsMine: false, message: answer, image });
  };


  return {
    createUUID,
    messages,
    onSendMessage
  };
};
