const verificarFormulario = async () => {
    const id_usuario = localStorage.getItem('id_usuario');
    const type = localStorage.getItem('tipo');
  
    if (!id_usuario || !type) {
      console.warn('Faltan datos en localStorage');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/user/user/info?id_usuario=${id_usuario}&type=${type}`);
      
      if (!response.ok) throw new Error("Algo salió mal");
  
      const data = await response.json();
      console.log("Redirigir a:", data.redirigir);
  
      if (data.redirigir) {
        window.location.href = `/${data.redirigir}`;
      }
    } catch (err) {
      console.error("Error al verificar el formulario:", err);
    }
  };
  
export default verificarFormulario;