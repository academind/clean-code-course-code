function log(message) {
  console.log(message);
}

log('Hi there!');


class Message {
  constructor(message) {
    this.message = message;
  }

  log() {
    console.log(this.message);
  }
}

const msg = new Message('Hi!');
msg.log();



function square(number) {
  return number * number;
}

const result = square(3);

function emailIsValid(email) {
  return email.includes('@');
}

const isValid = emailIsValid('max@test.com');

