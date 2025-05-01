import fetchAuth from '/src/utils/fetchAuth';

const getRejected = async (type) => {
    const response = await fetchAuth(`http://localhost:3000/${type == 2 ? 'school' : 'donator'}/get/rejected`);
    const data = await response.json();
    return data.response[0].razon_rechazo;
}

export default getRejected