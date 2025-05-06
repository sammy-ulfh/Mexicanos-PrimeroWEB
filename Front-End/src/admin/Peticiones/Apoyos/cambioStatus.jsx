import fetchAuth from '/src/utils/fetchAuth';

const cambioStatus = async (formData) => {
    console.log('formData:', formData);
    try {
      const response = await fetchAuth('http://localhost:3000/apoyo/status', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.mensaje);
        //window.location.href = `/${data.redirigir}`;
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error en submit:', error);
    }
  };
  
  export default cambioStatus;
  