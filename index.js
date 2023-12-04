var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");
var submitError = document.getElementById("submitError");
var submitBtn = document.getElementById("submitBtn");
 
//---name validation---//

function validateName() {
  var name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  nameError.innerHTML = "<p>You can Continue  </p>";
  return true;
}

//-----Email valitation----//

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Please Enter your email id";
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Enter Valid Email";
    return false;
  }
  emailError.innerHTML = "<p>You can Continue </p>";
  return true;
}

//------Phone number valitation----//

function validatePhone() {
  var phone = document.getElementById("phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Please Enter Your phone number";
    return false;
  }
  if (phone.length != 10) {
    phoneError.innerHTML = "Must be 10 digit number";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Enter Valid phone number.";
    return false;
  }
  phoneError.innerHTML = "<p>You can Continue </p>";
  return true;
}

//-----formvaliton---------//

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail()) {
    submitError.style.display = "block";
    submitError.innerHTML = " Please Enter Your Form ";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 5000);
    return false;
  }
  if (validateName() || validatePhone() || validateEmail()) {
    confirm("Submit saccess full ");
  }
}
