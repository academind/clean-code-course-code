function generateId(userName) {
  const id = 'id_' + userName;
  return id;
}

function generateId(userName) {
  const id = userName + Math.random().toString();
  return id;
}

let lastAssignedId;

function generateId(userName) {
  const id = 'id_' + userName;
  lastAssignedId = id;
  return id;
}
