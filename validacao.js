const formulario = document.getElementById('formulario');
const senha = document.getElementById('senha');
const senhaConfirmacao = document.getElementById('senhaConfirmacao');
const login = document.getElementById('login');
const cpf = document.getElementById('cpf');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const dataNasc = document.getElementById('dataNasc');
const email = document.getElementById('email');
const curso = document.getElementById('curso');


//confere se a senha e a confirmação da senha batem
function confereSenha(item) {
    valida(item);
    if (item.value === senha.value) item.setCustomValidity('');
    else item.setCustomValidity('As senhas digitadas não são iguais. Confira!');
}

//valida a senha nos parametros: (1 - se tem caractér especial) (2 - se tem um dígito)
function validaSenha() 
{
    var tamanhoMinSenha = 8;
    var numeros = /([0-9])/;
	var alfabeto = /([a-zA-Z])/;
	var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
 	
}


function valida(item) {
    
    //(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/gm
    let regex = /(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;
    if (regex.test(item)) {
        console.log(item.value, '= válida');
    } else {
        console.log(item.value, '= inválida');
    }
}

//Valida se o cpf existe
function verificarCPF(strCpf) {

    strCpf = strCpf.replace(/[^0-9]/g, '')
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
 
function validaSenhaConfirma(){
    
    if (senha.value != senhaConfirmacao.value) {
        return false;
    }
    else return true;
}
 
 //valida se os campos estão preenchidos
function validaCampos() {
    if (nome.value === "") {
        return false;  
    }
    if (telefone.value === "") {
        return false;  
    }
    if (login.value === "") {
        return false;   
    }
    if (cpf.value === "") {
        return false;   
    }
    if (dataNasc.value === "") {
        return false;   
    }
    if (email.value === "") {
        return false;   
    }
    if (curso.value === "") {
        return false;   
    }
    return true;
 }

 //valida e dá submit
function validar() {
    
    if (validaCampos() === false) {
        alert("Preencha todos os campos");
        $('#formulario').submit(function (e) {
            e.preventDefault();
        });
        return;   
    }

    if (verificarCPF(formulario.cpf.value) === false) {
        alert("O CPF listado não existe.");
        $('#formulario').submit(function (e) {
            e.preventDefault();
        });
        return;
    }

    if (validaSenhaConfirma() === false) {
        alert("As senhas não coincidem. Confira!");
        return;
    }
    
    else {
        formulario.submit();
        
    };
}
 

//solicita validação a cada alteração
senha.addEventListener('input', function () { confereSenha(senha) });
senhaConfirmacao.addEventListener('input', function(){ confereSenha(senhaConfirmacao) });