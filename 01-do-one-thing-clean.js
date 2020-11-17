function createUser(email, password) {
  if (!userDataIsValid(email, password)) {
    showValidationErrorMessage();
    return;
  }

  const user = buildUser(email, password);

  saveUserToDatabase(user);
}

function userDataIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
  return email && email.includes('@');
}

function passwordIsValid(password) {
  return password && password.trim() !== '';
}

function showValidationErrorMessage() {
  console.log('Invalid input!');
}

function buildUser(email, password) {
  return {
    email: email,
    password: password,
  };
}

function saveUserToDatabase(user) {
  database.insert(user);
}
