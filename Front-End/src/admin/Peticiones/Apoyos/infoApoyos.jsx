const infoApoyos = async () => {
    const response = await fetch('http://localhost:3000/apoyo/info');
    const JSONresponse = await response.json();
  
    return JSONresponse.response;
  }
  
  export default infoApoyos
  