const infoDonantes = async () => {
  const response = await fetch('http://localhost:3000/get/info/donantes');
  const JSONresponse = await response.json();

  return JSONresponse.response;
}

export default infoDonantes
