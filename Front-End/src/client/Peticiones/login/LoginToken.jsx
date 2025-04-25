const LoginToken = async ( username, password, navigate ) => {

    try {
        const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
  
        if (response.ok && data.token) {
       
       //localStorage.setItem('jwtToken', data.token);
       document.cookie = `jwtToken=${data.token};`;
       navigate('/portal/wait');
     } else if (data.message) {
       alert(`Error al iniciar sesión: ${data.mensaje}`);
     } else {
       alert('tro tipo de error');
     }
  
        console.log(data);
    } catch (error) {
      console.error('El sistema ha colapsado por culpa de ...', error);
    }

    return;
};

export default LoginToken;