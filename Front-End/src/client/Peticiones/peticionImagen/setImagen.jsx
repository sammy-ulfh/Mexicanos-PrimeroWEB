import fetchAuth from "/src/utils/fetchAuth";

const uploadProfileImage = async (formData) => {
    try {
      const res = await fetchAuth("http://localhost:3000/user/profile", {
        method: "PATCH",
        body: formData,
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || "Error al subir imagen");
      }
      return data.url; 
    } catch (err) {
      console.error("Error al subir imagen:", err);
      throw err;
    }
  };
  
  export default uploadProfileImage;
  