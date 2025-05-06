import fetchAuth from '/src/utils/fetchAuth';

const getMatching = async (dataToSearch) => {
  const response = await fetchAuth('http://localhost:3000/perfil/get/profiles', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ search: dataToSearch })
  });
  const JSONresponse = await response.json();

  console.log(JSONresponse.data);

  return JSONresponse.data;
}

export default getMatching
