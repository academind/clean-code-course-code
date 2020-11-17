function addId(user) {
  user.id = 'u1';
}

const user = { name: 'Max' };
addId(user);

console.log(user);


class User {
  constructor(name) {
    this.name = name;
  }

  addId() {
    this.id = 'u1';
  }
}

const customer = new User('Max');
customer.addId();
console.log(customer);

