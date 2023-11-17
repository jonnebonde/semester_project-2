/**
 * This module exports several arrays of objects that represent form fields for different forms used in the application.
 * @module formKeys
 * @type {Object[]}
 * @property {Object[]} loginForm - An array of objects representing the fields of the login form.
 * @property {string} loginForm.label - The label of the form field.
 * @property {string} loginForm.type - The type of the form field.
 * @property {string} loginForm.id - The id of the form field.
 * @property {string} loginForm.helpText - The help text of the form field.
 * @property {Object[]} registerForm - An array of objects representing the fields of the register form.
 * @property {string} registerForm.label - The label of the form field.
 * @property {string} registerForm.type - The type of the form field.
 * @property {string} registerForm.id - The id of the form field.
 * @property {string} registerForm.helpText - The help text of the form field.
 * @property {Object[]} submitBidForm - An array of objects representing the fields of the submit bid form.
 * @property {string} submitBidForm.label - The label of the form field.
 * @property {string} submitBidForm.type - The type of the form field.
 * @property {string} submitBidForm.id - The id of the form field.
 * @property {string} submitBidForm.helpText - The help text of the form field.
 * @property {Object[]} createListingFormTextInputs - An array of objects representing the text input fields of the create listing form.
 * @property {string} createListingFormTextInputs.label - The label of the form field.
 * @property {string} createListingFormTextInputs.type - The type of the form field.
 * @property {string} createListingFormTextInputs.id - The id of the form field.
 * @property {string} createListingFormTextInputs.helpText - The help text of the form field.
 * @property {Object[]} createlistingFormDateInput - An array of objects representing the date input fields of the create listing form.
 * @property {string} createlistingFormDateInput.label - The label of the form field.
 * @property {string} createlistingFormDateInput.type - The type of the form field.
 * @property {string} createlistingFormDateInput.id - The id of the form field.
 * @property {string} createlistingFormDateInput.helpText - The help text of the form field.
 * @property {Object[]} updateAvatarFormInput - An array of objects representing the fields of the update avatar form.
 * @property {string} updateAvatarFormInput.label - The label of the form field.
 * @property {string} updateAvatarFormInput.type - The type of the form field.
 * @property {string} updateAvatarFormInput.id - The id of the form field.
 * @property {string} updateAvatarFormInput.helpText - The help text of the form field.
 */
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

export const updateAvatarFormInput = [
  { label: "Avatar", type: "text", id: "avatar-form-input", helpText: "Enter a image url" }
];




