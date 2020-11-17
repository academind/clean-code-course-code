function log(message, isError) {
  if (isError) {
    console.error(message);
  } else {
    console.log(message);
  }
}

log('Hi there!', false);

function log(message) {
  console.log(message);
}

function logError(errorMessage) {
  console.error(errorMessage);
}

log('Hi there!');
logError('An error!');
