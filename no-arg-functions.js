function saveUser(email, password) {
  const user = {
    id: Math.random().toString(),
    email: email,
    password: password,
  };

  db.insert('users', user);
}

saveUser('test@test.com', 'testers');

function saveUser(user) {
  db.insert('users', user);
}

saveUser(newUser);



class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.id = Math.random().toString();
  }

  save() {
    db.insert('users', this);
  }
}

const user = new User('test@test.com', 'testers');
user.save();


let isLoggedIn = false;

function toggleLoginStatus() {
  isLoggedIn = !isLoggedIn;
}

toggleLoginStatus();

