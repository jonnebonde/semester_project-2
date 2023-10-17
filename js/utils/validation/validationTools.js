import displayMessage from "../../components/ui/displayMessage.js";

export function validateUserName(name, minLength, maxLength) {
  const nameRegex = new RegExp(`^[A-Za-z0-9_]{${minLength},${maxLength}}$`);

  if (name.length < minLength) {
    displayMessage("error", `Name is too short. It should be at least ${minLength} characters long.`, "#usernameHelp");
    return `Name is too short. It should be at least ${minLength} characters long.`;
  } else if (name.length > maxLength) {
    displayMessage("error", `Name is too long. It should be at most ${maxLength} characters long.`, "#usernameHelp");
    return `Name is too long. It should be at most ${maxLength} characters long.`;
  } else if (!nameRegex.test(name)) {
    displayMessage("error", `Name contains disallowed symbols or characters.`, "#usernameHelp");
    return `Name contains disallowed symbols or characters.`;
  }
  displayMessage("success", "Username is valid", "#usernameHelp");
  return true;
}

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

export function validateLength(value, len) {
  if (value.trim().length > len) {
    return true;
  }
}

export function validateRepeatedPassword(status, password, repeatPassword) {
  if (!status) {
    return false;
  } else if (status === true && password === repeatPassword) {
    return true;
  }
}
