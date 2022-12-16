// function formValidation(){
//     const email = document.forms.RegForm.email.value;
//     const password = document.forms.RegForm.pwd.value;
//     const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?)*(\.\w{2,3})+$/g;
//     const regPwd = /^[a-zA-z0-9!@#$%^&*]{6,16}$/;
//     let minNumChar = 6;
//     let maxNumChar = 16;

//     if(email === '' || !regEmail.test(email)){
//         alert('Please enter a valid email address');
//         email.focus();
//         return false;
//     }
//     if(password === ''){
//         alert('password sould not empty');
//         password.focus();
//         return false;
//     }
//     if(password.length<minNumChar || password.length>maxNumChar){
//         alert('password length sould be atleast six characters');
//         return false;
//     }
//     if(!regPwd.test(password)){
//         alert('password should contain alteast one num and one special character');
//         return false;
//     }
//     return true;
// }

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
// const regPwd = /^[a-zA-z0-9!@#$%^&*]{6,16}$/;

// show error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  // console.log(small);
  small.innerText = message;
}

// show success color

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
    //   console.log(input);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// check email is valid

function checkEmail(input) {
  const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?)*(\.\w{2,3})+$/g;
  if (emailCheck.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is invalid 🙄");
  }
}

// check input length

function checkLength(input, min, max) {
  if (!input.value) {
    showError(input, `${getFieldName(input)} should not be empty 😢 `);
  } else if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters 😒`
    );} 
    // else if(!password.match(isPasswordSecure)){
    //     showError(
    //         input,
    //         "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
    //       );
    // }
    else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters 😒`
    );}
//    else if (!isPasswordSecure(password)) {
//     showError(
//       input,
//       "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
//     );
//   }
  else {
    showSuccess(input);
  }
}

const isPasswordSecure = (input) => {
    const re = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return re.test(password);
  };


// check empty
function checkEmpty(input) {
  if (input.value === "") {
    showError(input, `${getFieldName(input)} should not be empty 😕`);
  }
}
// get Fieldname

function getFieldName(input) {
//   console.log(input.id);
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listener

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([email, password]);
  checkEmail(email);
  checkLength(password, 6, 16);
  checkEmpty(email, password);
});
