
export function emailChecker(email) {

const emailRegex = /\b[A-Za-z0-9._%+-]+@(stud\.)?noroff\.no\b/;

function validateEmail(email) {
  return emailRegex.test(email);
}

if (validateEmail(email)) {
  return true;
}

return false;
}