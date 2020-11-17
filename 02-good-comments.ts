// accepts [text]@[text].[text], i.e. it simply requires an "@" and a dot
const emailRegex = /\S+@\S+\.\S+/;

// Only works in browser environment
localStorage.setItem('user', 'test@test.com');
