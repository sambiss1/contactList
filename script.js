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
let uploadedImage = document.querySelector("#uploadedImage");

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

let isModified = false;
console.log(isModified);

/* Submit form */
form.addEventListener("submit", submitInformation = (event) => {
  event.preventDefault();
  // if (isModified) return;
  /* Submit contactImage*/
  const contactDetailsImage = document.createElement("img");
  /* Create contact details container */
  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contactDetails");

  /* Create Contact Image container */
  const contactDetailsImageContainer = document.createElement("div");
  let firstName = document.createElement("span")
  let lastName = document.createElement("span");
  let selectedOption = document.createElement("p");
  let bioText = document.createElement("p");
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
    selectedOption.textContent = selectGroup[i].text;
  }
  // Show bio
  bioText.textContent = bioField.value;

  console.log(isModified);
  const contactDetailsId = Math.random().toString().substring(2, 17);
  let contactID = contactDetails.setAttribute("id", contactDetailsId);
  // Update contact list
  contactDetails.addEventListener("click", clickOnContactDetails = (event) => {
    isModified = true;
    console.log(isModified);

    if (event.target.classList.contains("contactDetails")) {
      const idContact = event.target.id;
      console.log(idContact);
      if (event.target.id === contactDetailsId) {
        submitButton.value = "Modifier";
        firstNameField.value = firstName.textContent;
        lastNameField.value = lastName.textContent;
        for (let i = 0; i < selectGroup.length; i++) {
          selectGroup[i].text = selectedOption.textContent;
        }
        bioField.value = bioText.textContent;
        uploadedImage.src = contactDetailsImage.src;
        uploadedImageContainer.style.display = "block";
        uploadedImage.style.display = "block";

        // Update contact details 
        submitButton.addEventListener("click", updateContactDetails = (event) => {
          // Check if the contact details as the same as the previous one
          // if (firstNameField.value === firstName.textContent && lastNameField.value === lastName.textContent && bioField.value === bioText.textContent) {
          //   return;
          // }
          // Update contact details
          console.log(idContact);
          if (idContact === contactDetailsId) {

            firstName.textContent = firstNameField.value;
            lastName.textContent = " " + lastNameField.value;
            for (let i = 0; i < selectGroup.length; i++) {
              selectedOption.textContent = selectGroup[i].text;
            }
            bioText.textContent = bioField.value;
            contactDetailsImage.src = uploadedImage.src;
            submitButton.value = "Créer";
            isModified = false;
            console.log(isModified);
            form.reset();
          } else {
            return;
          }
        });
      }
    }
  });

  /* Create contact list */
  if (submitButton.value === "Créer") {
    contactListContainer.appendChild(contactDetails);
    contactDetails.appendChild(contactDetailsImageContainer)
    contactDetails.appendChild(aboutContact)
    aboutContact.appendChild(firstName)
    aboutContact.appendChild(lastName)
    aboutContact.appendChild(iconContainer)
    iconContainer.appendChild(iconDelete);
    aboutContact.appendChild(selectedOption)
    aboutContact.appendChild(bioText)
    contactDetailsImageContainer.appendChild(contactDetailsImage);
  }
  // form.reset();
  // Change contact Details on form
  // Generate unique id for contact details



  // End of contact details

  /* Reset form*/
  form.reset();
  uploadedImageContainer.style.display = "none";
  uploadedImage.src = "";

  // Delete Contact
  iconDelete.addEventListener("click", deleteInformation = () => {
    contactDetails.remove();
  })
  // End of delete contact
})




/* Reload page */
document.addEventListener("DOMContentLoaded", () => {
  form.reset();
  uploadedImage.style.display = "none";
})