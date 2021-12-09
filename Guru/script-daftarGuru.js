const nuptk = document.getElementById("nuptk");
const namaLengkap = document.getElementById("namaLengkap");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const daftarBtn = document.getElementById("daftarBtn");

//enter key trigger to change line
function changeLine(fromInput, toInput) {
  fromInput.addEventListener("keypress", function onEvent(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      toInput.focus();
    }
  });
}

changeLine(nuptk, namaLengkap);
changeLine(namaLengkap, email);
changeLine(email, username);
changeLine(username, password);
changeLine(password, confirmPassword);


function validatePassword() {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Password tidak sama!");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirmPassword.onfocus = validatePassword;

daftarBtn.addEventListener("click", function(){
  if (nuptk.value == ""|| namaLengkap.value == ""  || email.value == ""  || username.value == "" || password.value == "" || confirmPassword.value == ""){
    return false;
  } else {
    if(!event.detail || event.detail == 1){
      this.form.submit()
    }
    return true;
  }
});
