import fetchAuth from '/src/utils/fetchAuth';

const deleteUser = async () => {

    const result = await fetchAuth('http://localhost:3000/user/delete/user', {
      method: 'DELETE',
    });
  
    return result.status;
  };
  
  export default deleteUser;
  