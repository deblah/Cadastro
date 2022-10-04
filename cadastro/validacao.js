const senha = document.getElementById('senha');
const senhaConfirma = document.getElementById('senha1');

function validarSenha(item) {
    if (item.value === senha.value) item.setCustomValidity('');
    else item.setCustomValidity('As senhas digitadas não são iguais. Confira!');
}

document.getElementById('telefone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });
  
  


//solicita validação a cada alteração
senha.addEventListener('input', function () { validarSenha(senha) });
senhaConfirma.addEventListener('input', function () { validarSenha(senhaConfirma) });