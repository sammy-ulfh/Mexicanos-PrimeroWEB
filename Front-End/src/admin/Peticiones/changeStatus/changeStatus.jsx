const changeStatus = async ( id, type, id_escuela = null, status, razon_rechazo, id_donante = null ) => {
  
  let resultado = false;

  if (status != 3){
    razon_rechazo = null 
  }

  const result = await fetch(`http://localhost:3000/change/status/${id_escuela != null ? 'escuela' : 'donante'}`, {
    method: 'PATCH',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
      id: id,
      type: type,
      id_escuela: id_escuela,
      id_donante: id_donante,
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
