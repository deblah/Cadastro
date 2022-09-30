
const login = document.getElementById("login");
const password = document.getElementById("senha");
const passwordConfirmation = document.getElementById("senha2");



//Função de deixar o CPF nos parâmetros xxx.xxx.xxx-xx
function transformaCPF(i){
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 7) i.value += ".";
   if (v.length == 11) i.value += "-";

}

//Valida se o cpf existe

//Valida se o email existe existe


//Função de deixar o telefone no padrão (xx)xxxxx-xxxx
function transformaTel(i){
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }

   
   i.setAttribute("maxlength", "14");
   if (v.length == 0) i.value += "(";
   if (v.length == 3) i.value += ")";
   if (v.length == 9) i.value += "-";

}

//Valida a senha
function checkInputs() {
   const loginValue = login.value;
   const emailValue = email.value;
   const passwordValue = password.value;
   const passwordConfirmationValue = passwordConfirmation.value;
 
   if (loginValue === "") {
     setErrorFor(login, "O nome de usuário é obrigatório.");
   } else {
     setSuccessFor(login);
   }
 
 
   const formControls = form.querySelectorAll(".form-control");
 
   const formIsValid = [...formControls].every((formControl) => {
     return formControl.className === "form-control success";
   });
 
   if (formIsValid) {
     console.log("O formulário está 100% válido!");
   }
 }
 


//erro e sucesso
function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector("small");
 
   // Adiciona a mensagem de erro
   small.innerText = message;
 
   // Adiciona a classe de erro
   formControl.className = "form-control error";
 }
 
 function setSuccessFor(input) {
   const formControl = input.parentElement;
 
   // Adicionar a classe de sucesso
   formControl.className = "form-control success";
 }
