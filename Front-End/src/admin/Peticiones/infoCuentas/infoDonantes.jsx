import fetchAuth from '/src/utils/fetchAuth';

const infoDonantes = async () => {
  const response = await fetchAuth('http://localhost:3000/donator/info/donantes');
  const JSONresponse = await response.json();

  return JSONresponse.response;
}

export default infoDonantes
