import fetchAuth from '/src/utils/fetchAuth';

const irPerfil = async () => {
  try {
    const response = await fetchAuth('http://localhost:3000/user/rediregir', {
      method: 'GET',
    });

    const data = await response.json();

    if (response.ok == true) {
      alert(data.mensaje);
      window.location.href = `/${data.redirigir}`;
    } else {
      alert('Error al redirigir');
    }
  } catch (error) {
    console.error('Error en rediregir:', error);
  }
};

export default irPerfil;
