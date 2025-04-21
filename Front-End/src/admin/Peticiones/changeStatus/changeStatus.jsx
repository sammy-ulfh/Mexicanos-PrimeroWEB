const changeStatus = async ( id, type, id_escuela, status, razon_rechazo ) => {
  
  let resultado = false;

  if (status != 3){
    razon_rechazo = null 
  }

  console.log(id_escuela);

  const result = await fetch('http://localhost:3000/change/status/escuela', {
    method: 'PATCH',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
      id: id,
      type: type,
      id_escuela: id_escuela,
      status: status,
      razon_rechazo: razon_rechazo
    })
  });

  const JSONresult = await result.json();

  if (JSONresult.mensaje){
    resultado = true;
  }

  return resultado;
}

export default changeStatus
