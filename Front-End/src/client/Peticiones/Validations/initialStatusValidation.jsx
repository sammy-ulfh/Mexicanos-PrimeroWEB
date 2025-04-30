import fetchAuth from '/src/utils/fetchAuth';

const Validation = async (navigate) => {
    const response = await fetchAuth('http://localhost:3000/school/status');
    const data = await response.json();
    console.log(data.status);

    if (data.status === 0){
        navigate('/portal/school');
    }else if (data.status === 2){
        navigate('/portal');
    }else if (data.status === 3){
        navigate('/portal/rejected');
    }
    else if (data.status === 1){
        navigate('/portal/wait');
    }
}

export default Validation