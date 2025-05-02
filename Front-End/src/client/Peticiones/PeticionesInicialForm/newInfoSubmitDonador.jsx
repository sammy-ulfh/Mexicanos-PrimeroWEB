import fetchAuth from '/src/utils/fetchAuth';

const submit = async (formData) => {
  try {
    // 1. Crear FormData para POST
    const formDataToSend = new FormData();

    for (const key in formData) {
      if (key !== 'reporte' && key !== 'ine') {
        formDataToSend.append(key, formData[key]);
      }
    }

    if (formData.ine) {
      formDataToSend.append('ine', formData.ine);
    }

    if (formData.reporte) {
      formDataToSend.append('reporte', formData.reporte);
    }

    // 2. Enviar POST a /donator/new/info
    const postResponse = await fetchAuth('http://localhost:3000/donator/new/info', {
      method: 'POST',
      body: formDataToSend
    });

    const postData = await postResponse.json();
    console.log(postData);

    if (!postResponse.ok) {
      throw new Error('Error al enviar la información del donador');
    }

    // 3. Enviar PATCH a /user/set/nombre con JSON
    const patchResponse = await fetchAuth('http://localhost:3000/user/set/nombre', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre: formData.nombre }) // solo el nombre como JSON
    });

    const patchData = await patchResponse.json();
    console.log(patchData);

    if (!patchResponse.ok) {
      throw new Error('Error al actualizar el nombre del usuario');
    }

    // 4. Redirigir si todo salió bien
    alert(postData.mensaje);
    window.location.href = `/${postData.redirigir}`;
  } catch (error) {
    console.error('Error en submit:', error);
    alert('Hubo un error al enviar el formulario');
  }
};

export default submit;
