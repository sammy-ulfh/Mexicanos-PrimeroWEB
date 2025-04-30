import fetchAuth from '/src/utils/fetchAuth';

const submit = async (formData) => {
  try {
    const formDataToSend = new FormData();

    for (const key in formData) {
      const value = formData[key];

      if (key === 'reporte' && typeof value === 'object' && value instanceof File) {
        formDataToSend.append('reporte', value); 
      } else {
        formDataToSend.append(key, value);
      }
    }

    const response = await fetchAuth('http://localhost:3000/school/new/info', {
      method: 'POST',
      body: formDataToSend
    });

    const data = await response.json();

    if (response.ok == true) {
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
