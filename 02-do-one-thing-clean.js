function handleCreateUserRequest(request) {
  try {
    createUser('test@test.com', 'testers');
  } catch (error) {
    showErrorMessage(error.message);
  }
}

function createUser(email, password) {
  validateInput(email, password);

  saveUser(email, password);
}

function validateInput(email, password) {
  if (!inputIsValid(email, password)) {
    throw new Error('Invalid input!');
  }
}

function inputIsValid(email, password) {
  return email && email.includes('@') && password && password.trim() !== '';
}

function showErrorMessage(message) {
  console.log(message);
}

function saveUser(email, password) {
  const user = {
    email: email,
    password: password,
  };

  database.insert(user);
}
