import fetchAuth from '/src/utils/fetchAuth';

const infoEscuelas = async () => {
  const response = await fetchAuth('http://localhost:3000/school/info/escuelas');
  const JSONresponse = await response.json();

  return JSONresponse.response;
}

export default infoEscuelas
