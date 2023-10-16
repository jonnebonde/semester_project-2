export function validateUserName(name) {

  const nameRegex = /^[A-Za-z0-9_]+/;
  return nameRegex.test(name);
}