function buildUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

function buildUserByType(name, type) {
  let greetFn;
  if (type === 'friendly') {
    greetFn = function () {
      console.log('Hi, nice to meet you!');
    };
  } else if (type === 'unfriendly') {
    greetFn = function () {
      console.log('Hm? What do you want?');
    };
  }

  return {
    name: name,
    greet: greetFn,
  };
}

const friendlyUser = buildUserByType('Max', 'friendly');
friendlyUser.greet(); // Hi, nice to meet you!

const unfriendlyUser = buildUserByType('Max', 'unfriendly');
unfriendlyUser.greet(); // Hm? What do you want?
