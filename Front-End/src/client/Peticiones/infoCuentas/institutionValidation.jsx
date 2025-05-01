import fetchAuth from '/src/utils/fetchAuth';

const InstitutionValidation = async () => {
    const response = await fetchAuth('http://localhost:3000/donator/info/donantes');
    const data = await response.json();
    return data.inst
}

export default InstitutionValidation