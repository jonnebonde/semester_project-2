/**
 * Renders the profile information.
 * @param {Object} profileInfo - The profile information object.
 * @param {string} profileInfo.name - The name of the user.
 * @param {string} profileInfo.email - The email of the user.
 * @param {string} profileInfo.avatar - The URL of the user's avatar image.
 * @param {number} profileInfo.credits - The number of credits the user has.
 * @returns {HTMLDivElement} The profile information container element.
 */
export function renderProfileInfo(profileInfo) {
  const profileInfoContainer = document.createElement("div");
  profileInfoContainer.classList.add("col-12", "row", "m-auto");

  const profileAvatarContainer = document.createElement("div");
  profileAvatarContainer.classList.add(
    "profile-avatar-container",
    "col-12",
    "col-md-6",
    "d-flex",
    "justify-content-md-end",
    "justify-content-center",
  );

  const profileAvatar = document.createElement("img");
  profileAvatar.classList.add("profile-avatar", "m-1");
  profileAvatar.setAttribute("src", profileInfo.avatar);
  profileAvatar.setAttribute("alt", profileInfo.name);
  profileAvatar.setAttribute(
    "onerror",
    "src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'",
  );
  profileAvatarContainer.appendChild(profileAvatar);

  const profileCredentialsContainer = document.createElement("div");
  profileCredentialsContainer.classList.add(
    "profile-credentials-container",
    "col-12",
    "col-md-6",
    "d-flex",
    "flex-column",
    "text-break",
    "align-items-center",
    "align-items-md-start",
  );

  const profileInfoName = document.createElement("h2");
  profileInfoName.classList.add("mb-auto");
  profileInfoName.textContent = profileInfo.name;

  const profileInfoEmail = document.createElement("p");
  profileInfoEmail.classList.add("mb-auto");
  profileInfoEmail.textContent = profileInfo.email;

  const profileInfoCredits = document.createElement("p");
  profileInfoCredits.textContent = "Credits: " + profileInfo.credits + "Kr";

  const profileUpdateAvatarModalBtnContainer = document.createElement("div");
  profileUpdateAvatarModalBtnContainer.classList.add(
    "profile-update-avatar-modal-btn-container",
    "col-12",
    "d-flex",
    "justify-content-center",
  );

  const profileUpdateAvatarBtn = document.createElement("button");
  profileUpdateAvatarBtn.classList.add("btn", "btn-primary", "mt-3");
  profileUpdateAvatarBtn.textContent = "Update Avatar";
  profileUpdateAvatarBtn.setAttribute("data-bs-toggle", "modal");
  profileUpdateAvatarBtn.setAttribute("data-bs-target", "#updateAvatarModal");
  profileUpdateAvatarBtn.addEventListener("click", () => {
    const updateAvatarInput = document.querySelector("#avatar-form-input");
    updateAvatarInput.value = profileInfo.avatar;
  });

  profileUpdateAvatarModalBtnContainer.appendChild(profileUpdateAvatarBtn);

  profileCredentialsContainer.appendChild(profileInfoName);
  profileCredentialsContainer.appendChild(profileInfoEmail);
  profileCredentialsContainer.appendChild(profileInfoCredits);

  profileInfoContainer.appendChild(profileAvatarContainer);
  profileInfoContainer.appendChild(profileCredentialsContainer);
  profileInfoContainer.appendChild(profileUpdateAvatarModalBtnContainer);

  return profileInfoContainer;
}
