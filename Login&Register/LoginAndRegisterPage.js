const container = document.querySelector(".containerForm");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Collecting DOM elements and Values(ie: Text and password only)
const LoginForm = document.getElementById("Login");
const username = document.getElementById("username");
const password = document.getElementById("password");
const forgotten = document.querySelector("#forgotten");

//Directly collecting DOM  FOR the Input Field using Attribute selector of syntax:[]
const inputUsername = document.getElementsByTagName("input")[0];
const inputPassword = document.getElementsByTagName("input")[1];
const inputEmail = document.getElementsByTagName("input")[2];

//Collecting DOM elements
const loginForm = document.forms["form"][0];
const RegisterForm = document.forms["form"][1];

// Collecting DOM for input field
const usernameInput = document.forms["form"][0]["Username"];
const passwordInput = document.forms["form"][0]["Password"];

// Collecting DOM for Error message
const Error1 = document.querySelector(".msg1");
const Error2 = document.querySelector(".msg2");

//Assigning a Function & EventListener
loginForm.addEventListener("submit", SubmitLogin);
RegisterForm.addEventListener("submit", SubmitRegister);

//checking if i have gotten my data from the input
console.log(
  loginForm,
  RegisterForm,
  usernameInput,
  passwordInput,
  Error1,
  Error2
);

function SubmitRegister(e) {
  /*Preventing the form from reloading when user click/submit the form,
    unless User information have been put in fully*/
  e.preventDefault();

  //The actual message to user
  let RejectMsg = "Username Must have a Uppercase or Lowercase";
  let RejectMsg2 =
    "Password must'nt be lesser than 6 & more than 20 as well must contain at least 1 uppercase,1 lowercase and 1 number";
  let Accept = "Password Approved";

  //Regex pattern For validation
  const userPattern = /[A-Z/a-z]/;
  const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/;

  //Making the Message visible
  Error1.style.display = "block";
  Error2.style.display = "block";

  //SETTING CONDITIONS FOR Username
  //Checking if the input are Uppercase AND Lowercase values
  if (
    usernameInput.value.match(userPattern) ||
    passwordInput.value.match(passPattern)
  ) {
    //match is a function which match a regular expression(regex)
    usernameInput.style.borderColor = "green";
    Error1.style.display = "none";
    Error2.style.display = "none";
  } else {
    //otherwise if it is not a Uppercase AND Lowercase values do this:
    Error1.innerText = RejectMsg;
    Error1.style.color = "red";
    usernameInput.style.borderColor = "red";
  }

  // Removing Space if it's too much
  const RemoveWhiteSpace = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  //STORING DATA in local storage
  localStorage.setItem(
    "Login&RegistrationData",
    JSON.stringify(RemoveWhiteSpace)
  );

  // GETTING DATA in local storage
  const localData = JSON.parse(localStorage.getItem("Login&RegistrationData"));
  console.log(localData);

  //setting custom message to user if invalid username
  inputField.oninvalid = function (event) {
    event.target.setCustomValidity(
      "Must contain at least 1 number & 1 Uppercase and lowercase, and at least 8 or more characters"
    );
  };
}
