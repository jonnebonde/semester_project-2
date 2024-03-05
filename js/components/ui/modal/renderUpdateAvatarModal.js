/**
 * Renders an update avatar modal with a form to update the user's avatar.
 * @param {string} avatar - The URL of the user's current avatar.
 * @returns {HTMLDivElement} - The update avatar modal element.
 */
import { updateAvatarFormInput } from "../../../settings/formKeys.js";
import { renderForm } from "../forms/renderForm.js";

export function renderUpdateAvatarModal(avatar) {
  const updateAvatarModal = document.createElement("div");
  updateAvatarModal.classList.add("modal", "fade");
  updateAvatarModal.id = "updateAvatarModal";
  updateAvatarModal.setAttribute("tabindex", "-1");
  updateAvatarModal.setAttribute("aria-labelledby", "updateAvatarModalLabel");
  updateAvatarModal.setAttribute("aria-hidden", "true");

  const updateAvatarModalDialog = document.createElement("div");
  updateAvatarModalDialog.classList.add("modal-dialog");

  const updateAvatarModalContent = document.createElement("div");
  updateAvatarModalContent.classList.add("modal-content");

  const updateAvatarModalHeader = document.createElement("div");
  updateAvatarModalHeader.classList.add("modal-header");

  const updateAvatarModalTitle = document.createElement("h5");
  updateAvatarModalTitle.classList.add("modal-title");
  updateAvatarModalTitle.setAttribute("id", "updateAvatarModalLabel");
  updateAvatarModalTitle.textContent = "Update Avatar";

  const updateAvatarModalCloseBtn = document.createElement("button");
  updateAvatarModalCloseBtn.classList.add("btn-close");
  updateAvatarModalCloseBtn.setAttribute("type", "button");
  updateAvatarModalCloseBtn.setAttribute("data-bs-dismiss", "modal");
  updateAvatarModalCloseBtn.setAttribute("aria-label", "Close");

  updateAvatarModalHeader.appendChild(updateAvatarModalTitle);
  updateAvatarModalHeader.appendChild(updateAvatarModalCloseBtn);

  const updateAvatarModalBody = document.createElement("div");
  updateAvatarModalBody.classList.add("modal-body");

  const updateAvatarModalImgPreview = document.createElement("img");
  updateAvatarModalImgPreview.classList.add("update-avatar-preview");
  updateAvatarModalImgPreview.setAttribute("src", avatar);
  updateAvatarModalImgPreview.setAttribute("alt", "avatar preview");
  updateAvatarModalImgPreview.setAttribute(
    "onerror",
    "src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'",
  );

  updateAvatarModalBody.appendChild(updateAvatarModalImgPreview);

  renderForm(
    updateAvatarModalBody,
    updateAvatarFormInput,
    "update-avatar",
    avatar,
  );

  updateAvatarModalContent.appendChild(updateAvatarModalHeader);
  updateAvatarModalContent.appendChild(updateAvatarModalBody);

  updateAvatarModalDialog.appendChild(updateAvatarModalContent);

  updateAvatarModal.appendChild(updateAvatarModalDialog);

  return updateAvatarModal;
}
