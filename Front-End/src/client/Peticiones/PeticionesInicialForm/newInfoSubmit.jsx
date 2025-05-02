import fetchAuth from '/src/utils/fetchAuth';

const submit = async (formData) => {
  try {
    // 1. Preparar datos para el POST
    const formDataToSend = new FormData();

    for (const key in formData) {
      const value = formData[key];

      if (key === 'reporte' && value instanceof File) {
        formDataToSend.append('reporte', value);
      } else {
        formDataToSend.append(key, value);
      }
    }

    // 2. POST a /school/new/info
    const postResponse = await fetchAuth('http://localhost:3000/school/new/info', {
      method: 'POST',
      body: formDataToSend
    });

    const postData = await postResponse.json();

    if (!postResponse.ok) {
      throw new Error(`Error POST: ${postData.mensaje || postResponse.status}`);
    }

    // 3. PATCH a /user/set/nombre (solo si el POST fue exitoso)
    const response = await fetchAuth('http://localhost:3000/user/set/nombre', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre: formData.nombre })
    });
    

    const patchData = await response.json();

    if (!response.ok) {
      throw new Error(`Error PATCH: ${patchData.mensaje || response.status}`);
    }

    // 4. Redirigir si todo salió bien
    alert(postData.mensaje);
    window.location.href = `/${postData.redirigir}`;
    
  } catch (error) {
    console.error('Error en submit:', error);
    alert('Ocurrió un error: ' + error.message);
    return error.message;
  }
};

export default submit;
