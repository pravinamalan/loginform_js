// function formValidation(){
//     const email = document.forms.RegForm.email.value;
//     const password = document.forms.RegForm.pwd.value;
//     const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?)*(\.\w{2,3})+$/g;
//     const regPwd = /^[a-zA-z0-9!@#$%^&*]{6,16}$/;
//     let minNumChar = 6;
//     let maxNumChar = 16;

//     if(email === '' && password === ''){
//         showError('email is invalid');
//     }

//     if(email === '' || !regEmail.test(email)){
//         // alert('Please enter a valid email address');
//         showError('email is invalid')
//         email.focus();
//         return false;
//     }
//     if(password === ''){
//         // alert('password sould not empty');
//         showError(password,'should not be empty');
//         password.focus();
//         return false;
//     }
//     if(password.length<minNumChar || password.length>maxNumChar){
//         // alert('password length sould be atleast six characters');
//         // showError(password,'should not be empty');
//         return false;
//     }
//     if(!regPwd.test(password)){
//         alert('password should contain alteast one num and one special character');
//         return false;
//     }
//     return true;
// }
// function showError(input,message){
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }
// function showSuccess(input){
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }
// function checkRequired(inputArr){
//     inputArr.forEach(function(input){
//         if(input.value.trim() === ''){
//             showError(input,`${getFieldName(input)} is required`)
//         }else{
//             showSuccess(input);
//         }
//     });
// }
// function checkLength(input,min,max){
//     if(input.value.length<min){
//         showError(input,`${getFieldName(input)} must be atleast ${min} characters`);
//     }else if(input.value.length > max){
//         showError(input,`${getFieldName(input)} must be less than ${max} characters`);
//     }
//     else{
//         showSuccess(input);
//     }
// }
// function getFieldName(input){
//     return input.id.charAt(0).toUpperCase()+input.id.slice(1)
// }

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     checkRequired([email,password]);
//     checkLength(password,6,16)
//     formValidation();
// })