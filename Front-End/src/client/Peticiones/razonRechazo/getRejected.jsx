import fetchAuth from '/src/utils/fetchAuth';

const getRejected = async () => {
    const response = await fetchAuth('http://localhost:3000/school/get/rejected');
    const data = await response.json();
    return data.response[0].razon_rechazo;
}

export default getRejected