export function validateEmail(email) {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@(stud\.)?noroff\.no\b/;

  function checkEmail(email) {
    return emailRegex.test(email);
  }

  if (checkEmail(email)) {
    return true;
  }

  return false;
}
