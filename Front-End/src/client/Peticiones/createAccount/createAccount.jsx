const createAccount = async ({ type, email, password }) => {
  const result = await fetch('http://localhost:3000/user/new/account', {
    method: 'PUT',
    body: {
      type: type,
      email: email,
      password: password
    }
  });

  return result;
};

export default createAccount
