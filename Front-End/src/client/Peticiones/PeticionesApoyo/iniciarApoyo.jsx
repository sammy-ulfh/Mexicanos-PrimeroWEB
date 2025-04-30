import fetchAuth from '/src/utils/fetchAuth';

const crearApoyo = async (formData) => {
    try {
      const response = await fetchAuth('http://localhost:3000/apoyo/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.mensaje);
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error en submit:', error);
    }
  };
  
  export default crearApoyo;
  