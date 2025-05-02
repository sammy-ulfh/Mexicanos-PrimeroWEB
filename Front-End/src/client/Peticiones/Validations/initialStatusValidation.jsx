import fetchAuth from '/src/utils/fetchAuth';

const Validation = async (navigate) => {
    try{

        const response = await fetchAuth('http://localhost:3000/school/get/status');
        const data = await response.json();

        console.log(data);

        if (data.status == null){
            navigate('/portal');
        }else if (data.status === 2){
            navigate('/configuration/profile');
        }else if (data.status === 3){
            navigate('/portal/rejected');
        }
        else if (data.status === 1){
            navigate('/portal/wait');
        }
    }catch (error) {
        console.error('Error en la validación:', error);
    }
}

export default Validation