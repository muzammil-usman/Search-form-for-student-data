function atTheRateChecker(e) {
  if (e.target.value.indexOf("@") === -1) {
    emailError.innerText = "Please use @ in email address";
    emailError.style.display = "block";
    return;
  }
  emailError.style.display = "none";
}

function atTheRateChecker2(e) {
  if (e.target.value.indexOf("@") === -1) {
    emailError2.innerText = "Please use @ in email address";
    emailError2.style.display = "block";
    return;
  }
  emailError2.style.display = "none";
}

function pwLengthChecker(e) {
  if (e.target.value.length < 6) {
    pwError.innerText = "Password Should be more than 5 words";
    pwError.style.display = "block";
    return;
  }
  pwError.style.display = "none";
}

function pwLengthChecker2(e) {
  if (e.target.value.length < 6) {
    pwError2.innerText = "Password Should be more than 5 words";
    pwError2.style.display = "block";
    return;
  }
  pwError2.style.display = "none";
}

function nameLengthChecker(e) {
  if (e.target.value.length < 3) {
    nameError.innerText = "Name should be greater than 2 character";
    nameError.style.display = "block";
    return;
  }
  nameError.style.display = "none";
}

let userData = [{}];

function pushingData(e) {
  // e.preventDefault();
  userData.push({
    username: namee.value,
    email: email.value,
    password: signUpPassword.value,
  });
  console.log(userData);
}

let namee = document.getElementById("name");
let email = document.getElementById("signUpEmail");
let signUpPassword = document.getElementById("signUpPassword");
let emailError = document.getElementById("error");
let emailError2 = document.getElementById("error2");
let pwError = document.getElementById("pwError");
let pwError2 = document.getElementById("pwError2");
let nameError = document.getElementById("nameError");
