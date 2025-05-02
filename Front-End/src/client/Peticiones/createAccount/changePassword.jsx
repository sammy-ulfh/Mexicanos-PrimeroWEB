import fetchAuth from '/src/utils/fetchAuth';

const changePassword = async ( password ) => {

    const result = await fetchAuth('http://localhost:3000/user/change/password', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: password
      })
    });
  
    return result.status;
  };
  
  export default changePassword;
  