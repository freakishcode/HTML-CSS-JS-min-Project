// Toggle Login form
function showSignup() {
  document.querySelector(".Login_wrapper").style.display = "none";

  document.querySelector(".SignUp_wrapper").style.display = "block";
}

// Toggle showSignup form
function showLogin() {
  document.querySelector(".Login_wrapper").style.display = "block";

  document.querySelector(".SignUp_wrapper").style.display = "none";
}

// collected Login & Sign Up DOM form
const LoginForm = document.getElementById("Login");
const SignUpForm = document.getElementById("SignUp");

//collected DOM by Input Attribute selector for Login part
const inputU = document.getElementsByTagName("input")[0];
const inputP = document.getElementsByTagName("input")[1];
const forgotten = document.querySelector("#forgotten");

// Collected DOM for Login Error message
const UsernameError = document.querySelector(".message");
const PasswordError = document.querySelector(".message2");

//Assigning a Function & EventListener to My Facebook form
LoginForm.addEventListener("submit", Form1);
SignUpForm.addEventListener("submit", Form2);

function Form1(event) {
  /*Preventing the form from reloading when user click/submit the form,
    unless User information have been put in fully*/
  event.preventDefault();

  //Making the Message visible
  UsernameError.style.display = "block";
  PasswordError.style.display = "block";

  //The actual message to user
  let RejectUserMessage = "Username Must have a Uppercase or Lowercase";
  let RejectUserMessage2 =
    "Password must not be lesser than 6 & more than 20 as well must contain at least 1 uppercase,1 lowercase and 1 number";
  let ApprovedUser = "Password Approved";

  //Given pattern USING regex pattern
  const userPattern = /[A-Z/a-z]/;
  const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/;

  //SETTING CONDITIONS FOR Username
  //Checking if the input are Uppercase AND Lowercase values
  if (inputU.value.match(userPattern)) {
    //match is a function which match a regular expression(regex)
    inputU.style.borderColor = "green";
    UsernameError.style.display = "none";
  } else {
    //otherwise if it is not a Uppercase AND Lowercase values do this:
    UsernameError.innerText = RejectUserMessage;
    UsernameError.style.color = "red";
    inputU.style.borderColor = "red";
  }

  //SETTING CONDITIONS FOR password
  //const RejectUserMessage1 = prevent User from setting he/her password to be "password"
  /*
    if (password.value === "password") {
        ErrorMessageForPassword.innerText = RejectUserMessage1;
        ErrorMessageForPassword.style.color = "red";
        inputP.style.borderColor = "red";
        */
  if (inputP.value.match(passPattern)) {
    //ErrorMessageForPassword.style.display = "none";
    PasswordError.innerText = ApprovedUser;
    PasswordError.style.color = "green";
    inputP.style.borderColor = "green";
  } else {
    PasswordError.innerText = RejectUserMessage2;
    PasswordError.style.color = "red";
    inputP.style.borderColor = "red";
  }

  //MY OWN PRIMITIVE WAY OF GETTING DATA
  //showing Users information using An Object
  const FacebookUserDataClone = {
    username: inputU.value.trim(),
    password: inputP.value.trim(),
  };
  //NOTE:trim() is to prevent users from putting space while login input.
  //console.log(FacebookUserDataClone);

  //OFFICIAL WAY OF STORING AND GETTING DATA USING local storage
  //Accessing my local storage
  localStorage.setItem(
    "FacebookUserDataClone",
    JSON.stringify(FacebookUserDataClone)
  );

  const localData = JSON.parse(localStorage.getItem("FacebookUserDataClone"));
  console.log(localData);

  /*localStorage.getItem();//For getting stored JSON string data*/
  /*localStorage.removeItem();//For removing stored JSON string data*/
}

//collected DOM by id for Register(SignUp) part
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Collected DOM for Login Error message
const firstNameError = document.querySelector(".message3");
const lastNameError = document.querySelector(".message4");
const emailError = document.querySelector(".message5");
const RegPasswordError = document.querySelector(".message6");

// Sign Up Functionality
function Form2(e) {
  e.preventDefault();

  //Making the Message visible
  firstName.style.display = "block";
  RegPasswordError.style.display = "block";

  //The actual message to user
  let RejectMsg1 = "Username Must have a Uppercase or Lowercase";
  let RejectMsg2 =
    "Password must not be lesser than 6 & more than 20 as well must contain at least 1 uppercase,1 lowercase and 1 number";
  let ApprovedUser = "Password Approved";

  //Given pattern USING regex pattern
  const firstNamePattern = /[A-Z/a-z]/;
  const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/;

  //SETTING CONDITIONS FOR Username
  //Checking if the input are Uppercase AND Lowercase values
  if (firstName.value.match(userPattern)) {
    //match is a function which match a regular expression(regex)
    firstName.style.borderColor = "green";
    firstNameError.style.display = "none";
  } else {
    //otherwise if it is not a Uppercase AND Lowercase values do this:
    firstNameError.innerText = RejectMsg1;
    firstNameError.style.color = "red";
    firstName.style.borderColor = "red";
  }

  //SETTING CONDITIONS FOR password
  if (password.value.match(passPattern)) {
    //ErrorMessageForPassword.style.display = "none";
    RegPasswordError.innerText = ApprovedUser;
    RegPasswordError.style.color = "green";
    password.style.borderColor = "green";
  } else {
    RegPasswordError.innerText = RejectMsg2;
    RegPasswordError.style.color = "red";
    password.style.borderColor = "red";
  }

  //MY OWN PRIMITIVE WAY OF GETTING DATA
  //showing Users information using An Object
  const SignUpData = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    email: email.value.trim(),
    password: password.value.trim(),
  };
  //NOTE:trim() is to prevent users from putting space while login input.
  //console.log(FacebookUserDataClone);

  //OFFICIAL WAY OF STORING AND GETTING DATA USING local storage
  //Storing data in local storage
  localStorage.setItem("SignUpData", JSON.stringify(SignUpData));

  //Accessing data from local storage
  const localData2 = JSON.parse(localStorage.getItem("SignUpData"));
  console.log(localData2);
}
