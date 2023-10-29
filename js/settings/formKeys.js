export const loginForm = [
  { label: "Email address", type: "email", id: "email", helpText: "The email value must be a valid stud.noroff.no or noroff.no email" },
  { label: "Password", type: "password", id: "password", helpText: "Must be at least 8 characters long" },
];

export const registerForm = [
  { label: "Email address", type: "email", id: "email", helpText: "The email value must be a valid stud.noroff.no or noroff.no email" },
  { label: "Username", type: "text", id: "username", helpText: "We'll never share your username with anyone else..." },
  { label: "Password", type: "password", id: "password", helpText: "Must be at least 8 characters long" },
  { label: "Repeat password", type: "password", id: "repeat-password", helpText: "Your password is safe with us.." },
];

export const submitBidForm = [{ label: "Bid", type: "number", id: "bid", helpText: "" }];
