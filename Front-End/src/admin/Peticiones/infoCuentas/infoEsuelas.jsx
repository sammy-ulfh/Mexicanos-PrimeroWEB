const infoEscuelas = async () => {
  const response = await fetch('http://localhost:3000/get/info/escuelas');
  const JSONresponse = await response.json();

  return JSONresponse.response;
}

export default infoEscuelas
