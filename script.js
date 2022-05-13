// Variables to use
// form
const form = document.querySelector("form");

// FirstName 
const firstNameField = document.querySelector("#firstNameField");

// LastName 
const lastNameField = document.querySelector("#lastNameField");

// Group
const selectGroup = document.querySelector("#selectGroup");

// Bio
const bioField = document.querySelector("#bioField");

// Upload image 
const uploadFile = document.querySelector("#uploaderFile");

// Uploaded Image(Contact Image)
const uploadedImageContainer = document.querySelector(".contact__image__container")
let uploadedImage = document.querySelector("#uploadedImage");


// Submit button 
// const submitButton = document.querySelector("#submitButton");


// Contact list 
const contactListContainer = document.querySelector(".contact__list__container")

// Upload file function 
uploadFile.addEventListener("change", (event) => {
  uploadedImageContainer.style.display = "block";
  uploadedImage.style.display = "block"

  // Upload image to the container
  uploadedImage.src = URL.createObjectURL(event.target.files[0]);
})

// Without isModified variable, the form will be submitted twice
let isModified = false;
let selectedContacts = null;

// add form reset event listener
form.addEventListener("reset", (event) => {
  isModified = false;
  selectedContacts = null;
});

// Submit form event
form.addEventListener("submit", submitInformation = (event) => {
  event.preventDefault();

  // Submit contactImage/ Create image element
  const contactDetailsImage = document.createElement("img");
  contactDetailsImage.classList.add('image');

  // Create contact details container
  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contactDetails");

  // Create Contact Image container
  const contactDetailsImageContainer = document.createElement("div");

  // Create first name container
  let firstName = document.createElement("span");
  firstName.classList.add('firstName');

  // Create last name container
  let lastName = document.createElement("span");
  lastName.classList.add('lastName');

  // Create group container
  let selectedOption = document.createElement("p");
  selectedOption.classList.add('selectedOption')

  // Create bio container
  let bioText = document.createElement("p");
  // add class bio
  bioText.classList.add('bio');

  // Create contact image
  const iconContainer = document.createElement("span");
  iconContainer.classList.add('iconContainer');
  const iconDelete = document.createElement("i");
  iconDelete.classList.add("las", "la-times");

  // About Contact
  const aboutContact = document.createElement("div");
  aboutContact.classList.add("aboutContact")
  contactDetailsImageContainer.classList.add("contactDetailsImageContainer");
  contactDetailsImage.classList.add("contactImageDetails");

  // Get and Show Contact Information

  // Get first name
  firstName.textContent = firstNameField.value;

  // Get last name
  lastName.textContent = " " + lastNameField.value;

  // Get image 
  contactDetailsImage.src = uploadedImage.src;

  // Get selected option 
  // for (let i = 0; i < selectGroup.length; i++) {

  // }
  selectedOption.textContent = selectGroup.value;

  // Show bio
  bioText.textContent = bioField.value;

  // Show contact details
  // Create Contact List
  if (isModified == false) {
    // Generate unique id for contact details
    const contactDetailsId = "id" + Math.random().toString().substring(2, 17);

    // Attribute id to ContactDetails 
    let contactID = contactDetails.setAttribute("id", contactDetailsId);

    // Update contact list
    // Event on click on contact details
    contactDetails.addEventListener("click", clickOnContactDetails = (event) => {

      // Change isModified value to true
      isModified = true;
      selectedContacts = contactDetailsId;
      if (event.target.classList.contains("la-times") || event.target.classList.contains("iconContainer")) {
        return;
      }

      // Change submitButton value to "Modifier"
      submitButton.value = "Modifier";

      // Get Contact details, and show it on the form

      // FirstName
      firstNameField.value = firstName.textContent;

      // LastName
      lastNameField.value = lastName.textContent;

      // Selected option
      selectGroup.value = selectedOption.textContent;

      // Bio text
      bioField.value = bioText.textContent; firstName;

      // Image 
      uploadedImageContainer.style.display = 'block';
      uploadedImage.src = contactDetailsImage.src;


    });

    contactDetails.appendChild(contactDetailsImageContainer);
    contactDetails.appendChild(aboutContact);
    aboutContact.appendChild(firstName);
    aboutContact.appendChild(lastName);
    aboutContact.appendChild(iconContainer);
    iconContainer.appendChild(iconDelete);
    aboutContact.appendChild(selectedOption);
    aboutContact.appendChild(bioText);
    contactDetailsImageContainer.appendChild(contactDetailsImage);
    contactListContainer.appendChild(contactDetails);
    form.reset();
    // End of contact details
    uploadedImageContainer.style.display = "none";
    uploadedImage.src = "";
  } else {

    // Get new information
    const contactDetailsContainer = document.querySelector(`#${selectedContacts}`);

    // FirstName
    contactDetailsContainer.querySelector('.firstName').textContent = firstNameField.value;
    console.log(firstNameField.value);
    // lastName
    contactDetailsContainer.querySelector('.lastName').textContent = " " + lastNameField.value;

    // Selected optiontexiotContent
    // }
    contactDetailsContainer.querySelector('.selectedOption').textContent = selectGroup.value;
    // Bio text
    contactDetailsContainer.querySelector('.bio').textContent = bioField.value;

    // Contact Image

    if (uploadFile.files.length > 0) {
      contactDetailsContainer.querySelector('.image').src = URL.createObjectURL(uploadFile.files[0]);;
    }

    // Change submitButton value to "Créer"
    submitButton.value = "Créer";

    // We reset form
    form.reset();

  }
  // End of contact details
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