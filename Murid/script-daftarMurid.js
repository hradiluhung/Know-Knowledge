const nisn = document.getElementById("nisn");
const namaLengkap = document.getElementById("namaLengkap");
const email = document.getElementById("email");
const username = document.getElementById("username");
const kelas = document.getElementById("kelas");
const jurusan = document.getElementById("jurusan");
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

changeLine(nisn, namaLengkap);
changeLine(namaLengkap, email);
changeLine(email, username);
changeLine(username, kelas);
changeLine(kelas, jurusan);
changeLine(jurusan, password);
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
  if (nisn.value == ""|| namaLengkap.value == ""  || email.value == ""  || username.value == "" || kelas.value == ""|| jurusan.value == ""  || password.value == "" || confirmPassword.value == ""){
    return false;
  } else {
    if(!event.detail || event.detail == 1){
      this.form.submit()
    }
    return true;
  }
});
