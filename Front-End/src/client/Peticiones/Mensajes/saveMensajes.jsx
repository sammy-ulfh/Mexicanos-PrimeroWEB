const createAccount = async ( formData ) => {

    const result = await fetch('http://localhost:3000/mensajes/save/chat', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: formData
    });
    
    return result.status;
  };
  
  export default createAccount
  