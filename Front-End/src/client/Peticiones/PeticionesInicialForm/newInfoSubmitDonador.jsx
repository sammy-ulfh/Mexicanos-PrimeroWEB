import fetchAuth from '/src/utils/fetchAuth';

const submit = async (formData) => {
    try {
      const formDataToSend = new FormData();
  
      for (const key in formData) {
        if (key !== 'reporte' && key !== 'ine') {
          formDataToSend.append(key, formData[key]); 
        } 
      }

        if(formData.ine){
            formDataToSend.append('ine', formData.ine); 
        }

        if(formData.reporte){
            formDataToSend.append('reporte', formData.reporte);
        }
  
      const response = await fetchAuth('http://localhost:3000/donator/new/info', {
        method: 'POST',
        body: formDataToSend 
      });
  
      const data = await response.json();
      console.log(data);
  
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
  
  export default submit;
  