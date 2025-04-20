import createAccount from './createAccount.jsx';

function createAccountValidation(email, password, confirmPassword, type) {

  let estatus = [];

  const isEqual = password == confirmPassword;
  const isSlower = password.length <= 50;
  const isSlowerEmail = email.length <= 100;
  const isCorrectType = type == 2 || type == 3; 

  if (isEqual && isSlower && isSlowerEmail && isCorrectType){
      estatus.push('correct');
      estatus.push(createAccount(type, email, password));
    }
  else if ( !isEqual ){
    estatus.push('different');
  }
  else if ( !isSlower ){
    estatus.push('password too long');
  }
  else if ( !isSlowerEmail ){
    estatus.push('email too long');
  }

  if (password.length == 0 || confirmPassword.length == 0 || email.length == 0){
    estatus = ['empty'];
  }

  return estatus;
}

export default createAccountValidation
