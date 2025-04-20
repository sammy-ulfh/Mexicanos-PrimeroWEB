const createAccount = async ( type, email, password ) => {

  const result = await fetch('http://localhost:3000/user/new/account', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: type,
      email: email,
      password: password
    })
  });

  return result.status;
};

export default createAccount
