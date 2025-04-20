const createAccount = async ( type, email, password ) => {
  console.log(type)
  console.log(email)
  console.log(password)

  const result = await fetch('http://localhost:3000/user/new/account', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: type,
      email: email,
      password: password
    })
  });

  return result;
};

export default createAccount
