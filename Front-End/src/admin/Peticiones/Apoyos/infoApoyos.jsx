import fetchAuth from '/src/utils/fetchAuth';
const infoApoyos = async () => {
    const response = await fetchAuth('http://localhost:3000/apoyo/info');
    const JSONresponse = await response.json();
  
    return JSONresponse.response;
  }
  
  export default infoApoyos
  