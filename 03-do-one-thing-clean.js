function createUser(email, password) {
  if (!email || !password) {
    console.log('Both email and password must be provided!');
    return;
  }
  if (
    !email.includes('@') ||
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/.test(
      password
    ) ||
    password.length < 7
  ) {
    console.log('Email or password is invalid!');
    return;
  }

  const user = {
    email: email,
    password: password,
  };
  const query =
    'INSERT INTO users VALUES (' + user.email + ', ' + user.password + ')';
  database.runQuery(query);
}
