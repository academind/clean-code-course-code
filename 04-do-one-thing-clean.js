function createUser(email, password) {
  try {
    setupUser(email, password);
  } catch (error) {
    handleError(error);
  }
}

function setupUser(email, password) {
  validateUserData(email, password);

  const user = buildUser(email, password);

  saveUserToDatabase(user);
}

function validateUserData(email, password) {
  if (!userDataIsValid(email, password)) {
    throw new Error('Invalid input!');
  }
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

function buildUser(email, password) {
  return {
    email: email,
    password: password,
  };
}

function saveUserToDatabase(user) {
  database.insert(user);
}

function handleError(error) {
  console.log(error.message);
}
