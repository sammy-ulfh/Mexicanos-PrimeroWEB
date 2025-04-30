export default async function fetchAuth(url, opciones = {}) {
    const config = {
        ...opciones,
        credentials: 'include', 
    };
  
    try {
      const res = await fetch(url, config);
        console.log(res);
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          window.location.href = '/login';
          return null;
        }
        throw new Error(`Error ${res.status}`);
      }
  
      // Devuelve los datos en formato JSON
      return await res.json();
    } catch (err) {
      console.error('Error al hacer fetch:', err);
      throw err;
    }
  }