import fetchAuth from '/src/utils/fetchAuth';

const getChats = async () => {
    const response = await fetchAuth('http://localhost:3000/chat_participantes/todos');
    const data = await response.json();
    console.log("respuesta", data);

    return data.chats;
}

export default getChats