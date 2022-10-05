const formulario = document.getElementById('formulario');
const senha = document.getElementById('senha');
const senhaConfirma = document.getElementById('senha1');
const cpf = document.getElementById('cpf');


//confere se a senha e a confirmação da senha batem
function confereSenha(item) {
    if (item.value === senha.value) item.setCustomValidity('');
    else item.setCustomValidity('As senhas digitadas não são iguais. Confira!');
}

//valida a senha nos parametros: (1 - se tem caractér especial) (2 - se tem um dígito)

function validaSenha() {
    var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;  
}

//Valida se o cpf existe
function verificarCPF(strCpf) {

    strCpf = strCpf.replace(/[^0-9]/g, '')
    console.log(strCpf);
    if (!/[0-9]{11}/.test(strCpf)) return false;
    if (strCpf === "00000000000") return false;
 
    var soma = 0;
 
    for (var i = 1; i <= 9; i++) {
        soma += parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
 
    var resto = soma % 11;
 
    if (resto === 10 || resto === 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
 
    if (resto !== parseInt(strCpf.substring(9, 10))) {
        return false;
    }
 
    soma = 0;
 
    for (var i = 1; i <= 10; i++) {
        soma += parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;
 
    if (resto === 10 || resto === 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
 
    if (resto !== parseInt(strCpf.substring(10, 11))) {
        return false;
    }
 
    return true;
 }
 
 //valida e dá submit
 function validar() {
    if (verificarCPF(formulario.cpf.value) === false) {
        alert("Os dígitos verificadores do CPF não conferem.");
        return;
     }
     else formulario.submit();
}
 
 
//Função de deixar o telefone nos parametros xx xxxxx-xxxx
document.getElementById('telefone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });


//solicita validação a cada alteração
senha.addEventListener('input', function () { confereSenha(senha) });
senhaConfirma.addEventListener('input', function () { confereSenha(senhaConfirma) });