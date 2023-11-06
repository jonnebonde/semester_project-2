export const loginForm = [
  { label: "Email address", type: "email", id: "email", helpText: "The email value must be a valid stud.noroff.no email" },
  { label: "Password", type: "password", id: "password", helpText: "Must be at least 8 characters long" },
];

export const registerForm = [
  { label: "Email address", type: "email", id: "email", helpText: "The email value must be a valid stud.noroff.no email" },
  { label: "Username", type: "text", id: "username", helpText: "We'll never share your username with anyone else..." },
  { label: "Password", type: "password", id: "password", helpText: "Must be at least 8 characters long" },
  { label: "Repeat password", type: "password", id: "repeat-password", helpText: "Your password is safe with us.." },
];

export const submitBidForm = [{ label: "Bid", type: "number", id: "bid", helpText: "" }];

export const createListingFormTextInputs = [
  { label: "Title", type: "text", id: "title", helpText: "Enter a descriptive title for your listing" },
  { label: "Description", type: "textarea", id: "description", helpText: "Enter a description for your listing" },
];

export const createlistingFormDateInput= [
  { label: "End date", type: "datetime-local", id: "end-date", helpText: "Enter the end date for your listing" },
];




