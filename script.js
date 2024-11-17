function atTheRateChecker(e) {
  if (e.target.value.indexOf("@") === -1) {
    emailError.innerText = "Please use @ in email address";
    emailError.style.display = "block";
    emailError2.innerText = "Please use @ in email address";
    emailError2.style.direction = "block";
    return;
  }
  emailError.style.display = "none";
  emailError2.style.display = "none";
}

function pwLengthChecker(e) {
  if (e.target.value.length < 6) {
    pwError.innerText = "Password Should be more than 5 words";
    pwError.style.display = "block";
    pwError2.innerText = "Password Should be more than 5 words";
    pwError2.style.display = "block";
    return;
  }
  pwError.style.display = "none";
  pwError2.style.display = "none";
}
let namee = document.getElementById("name");
let email = document.getElementById("signUpEmail");
let signUpPassword = document.getElementById("signUpPassword");
let emailError = document.getElementById("error");
let emailError2 = document.getElementById("error2");
let pwError = document.getElementById("pwError");
let pwError2 = document.getElementById("pwError2");
let userData = [{}];

function pushingData() {
  userData.push({
    username: namee.value,
    email: email.value,
    password: signUpPassword.value,
  });
  console.log(userData);
}
