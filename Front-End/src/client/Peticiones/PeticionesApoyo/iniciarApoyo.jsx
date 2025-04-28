const crearApoyo = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/apoyo/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.mensaje);
        window.location.href = `/${data.redirigir}`;
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error en submit:', error);
    }
  };
  
  export default crearApoyo;
  