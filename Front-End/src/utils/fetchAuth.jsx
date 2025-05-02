export default async function fetchAuth(url, opciones = {}) {
  const type = localStorage.getItem('type');
  const id = localStorage.getItem('id');

    const config = {
        ...opciones,
        credentials: 'include', 
    };
  
    try {
      const res = await fetch(url, config);
        console.log(res);
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          if (type == 1){
            window.location.href = '/admin';
          }else { 
          window.location.href = '/login';
        }
          return null;
        }
        throw new Error(`Error ${res.status}`);
      }
  
      // Devuelve los datos en formato JSON
      return await res;
    } catch (err) {
      console.error('Error al hacer fetch:', err);
      throw err;
    }
  }