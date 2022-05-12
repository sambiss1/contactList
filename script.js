// Variables to use
// form
const form = document.querySelector("form");

// FirstName 
const firstNameField = document.querySelector("#firstNameField");
// LastName 
const lastNameField = document.querySelector("#lastNameField");
// Group
const selectGroup = document.querySelector("#selectGroup").selectedOptions;

// Bio
const bioField = document.querySelector("#bioField");

/* Upload image */
const uploadFile = document.querySelector("#upload__file");
// Image reader
const imageReader = new FileReader();

// Uploaded Image(Contact Image)
const uploadedImageContainer = document.querySelector(".contact__image__container")
const uploadedImage = document.querySelector("#uploadedImage");

// Submit button 
const submitButton = document.querySelector("#submitButton");

// Contact list 
const contactListContainer = document.querySelector(".contact__list__container")
/* Upload file function */
uploadFile.addEventListener("change", (event) => {
  uploadedImageContainer.style.display = "block";
  uploadedImage.style.display = "block"
  uploadedImage.src = URL.createObjectURL(event.target.files[0]);
})


/* Submit form */
form.addEventListener("submit", submitInformation = (event) => {
  event.preventDefault();
  /* Submit contactImage*/
  const contactDetailsImage = document.createElement("img");

  /* Create contact details container */
  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contactDetails");

  /* Create Contact Image container */
  const contactDetailsImageContainer = document.createElement("div");
  const firstName = document.createElement("span")
  const lastName = document.createElement("span");
  const selectedGroup = document.createElement("p");
  const bioText = document.createElement("p");
  const iconContainer = document.createElement("span");
  const iconDelete = document.createElement("i");
  iconDelete.classList.add("las", "la-times");

  /* About Contact */
  const aboutContact = document.createElement("div");
  aboutContact.classList.add("aboutContact")
  contactDetailsImageContainer.classList.add("contactDetailsImageContainer");
  contactDetailsImage.classList.add("contactImageDetails");

  /* Show Contact Information */
  /* Show image */
  contactDetailsImage.src = uploadedImage.src;
  /* Show first name*/
  firstName.textContent = firstNameField.value;
  // Show last name
  lastName.textContent = " " + lastNameField.value;
  // Show selected group 
  for (let i = 0; i < selectGroup.length; i++) {
    selectedGroup.textContent = selectGroup[i].text;
  }
  // Show bio
  bioText.textContent = bioField.value;


  // Add and show contact Details information
  contactListContainer.appendChild(contactDetails);
  // for (let i = 0; i < contactDetails.length; i++) {

  //   let contactId = 0;
  //   contactId = contactListContainer.children[i];
  //   console.log(contactId);
  // }

  contactDetails.appendChild(contactDetailsImageContainer)
  contactDetails.appendChild(aboutContact)

  aboutContact.appendChild(firstName)
  aboutContact.appendChild(lastName)
  aboutContact.appendChild(iconContainer)
  iconContainer.appendChild(iconDelete);
  aboutContact.appendChild(selectedGroup)
  aboutContact.appendChild(bioText)

  contactDetailsImageContainer.appendChild(contactDetailsImage);

  /* Reset form*/
  form.reset();
  uploadedImageContainer.style.display = "none";
  uploadedImage.src = ""
  /*URL.revokeObjectURL(files[0]);*/
  // Delete contact */
  iconDelete.addEventListener("click", deleteInformation = () => {
    contactDetails.remove();
  })
  // Change Information
  contactDetails.addEventListener("click", changeInformation = (event) => {
    submitButton.value = "Modifier"
    /* Show first name*/

  })
})



/* Reload page */
document.addEventListener("DOMContentLoaded", () => {
  form.reset();
  uploadedImage.style.display = "none";
})