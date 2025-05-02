const getRejected = async (formData) => {
    try {
        const response = await fetch('http://localhost:3000/user/get/nombre', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // { id_usuario: 123 }
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }

        const data = await response.json();
        return data.response[0]?.razon_rechazo ?? null;
    } catch (error) {
        console.error("Error al obtener razón de rechazo:", error);
        return null;
    }
};

export default getRejected;
