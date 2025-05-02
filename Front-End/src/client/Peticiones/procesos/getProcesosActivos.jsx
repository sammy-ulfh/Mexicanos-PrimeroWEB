import fetchAuth from '/src/utils/fetchAuth';

const getProcesosActivos = async () => {
    const response = await fetchAuth('http://localhost:3000/chat_participantes/procesos/activos');
    const data = await response.json();

    return data.chats;
}

export default getProcesosActivos