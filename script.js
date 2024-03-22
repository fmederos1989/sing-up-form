let password = document.querySelector('#password');
let confPassword = document.querySelector('#conf-password');
const createAcount = document.querySelector('.create');
let inputs = document.querySelectorAll('input')
let pwdInputs = document.querySelectorAll('.pwd')
let aviso = document.createElement('p')
const divPass = document.querySelector('.password')

createAcount.addEventListener('click', function () {
        if (password.value != confPassword.value) {
          pwdInputs.forEach((pwdInput) =>{
          pwdInput.style.border = "1px solid red"
          })
          password.value = '';
          confPassword.value = '';
          divPass.appendChild(aviso);
          aviso.textContent = '* Las contraseñas no coinciden';
          aviso.style.color = 'red';
        } else {
      divPass.removeChild(aviso);
      pwdInputs.forEach((pwdInput) =>{
      pwdInput.style.border = '1px solid rgb(118, 118, 118)'
      })
    }
  });