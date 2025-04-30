const loginToken = async ( username, password, navigate ) => {
    try {
        const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: username,
          password: password
        })
        });
        const data = await response.json();
  
        if (response?.ok && data?.token) {
    
       document.cookie = `jwtToken=${data.token};`;
       navigate('/portal/wait');
     } else if (data?.mensaje) {
       return data.mensaje;
     } else {
       return 'Algo ha salido mal al iniciar sesión, inténtelo de nuevo.';
     }
  
    } catch (error) {
      console.error('Server error...', error);
    }
};

export default loginToken;