import fetchAuth from '/src/utils/fetchAuth';

const changeStatus = async ( id, type, id_escuela = null, status, razon_rechazo, id_donante = null ) => {
  
  let resultado = false;

  if (status != 3){
    razon_rechazo = null 
  }

  if (id_escuela){ 
  const result = await fetchAuth('http://localhost:3000/school/status/', {
    method: 'PATCH',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
      id_escuela: id_escuela,
      status: status,
      razon_rechazo: razon_rechazo
    })
  });

}else{
  const result = await fetchAuth('http://localhost:3000/donator/status/', {
    method: 'PATCH',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
      id_donador: id_donador,
      status: status,
      razon_rechazo: razon_rechazo
    })
  });
}

  const JSONresult = await result.json();

  if (JSONresult.mensaje){
    resultado = true;
  }

  return resultado;
}

export default changeStatus
