
//Função de deixar o CPF nos parâmetros xxx.xxx.xxx-xx
function transformaCPF(item){
   var v = item.value;
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      item.value = v.substring(0, v.length-1);
      return;
   }
   
   item.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 7) item.value += ".";
   if (v.length == 11) item.value += "-";

}


//Função de deixar a dat nos padroes xx/xx/xxxx
function transformaData(item) {
   var v = item.value;

   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      item.value = v.substring(0, v.length-1);
      return;
   }

   item.setAttribute("maxlength", "10");
   if (v.length == 2 || v.length == 5) item.value += "/";
}


//Função de deixar o telefone nos parametros xx xxxxx-xxxx
document.getElementById('telefone').addEventListener('input', function (e) {
   var telValor = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
   e.target.value = !telValor[2] ? telValor[1] : '(' + telValor[1] + ') ' + telValor[2] + (telValor[3] ? '-' + telValor[3] : '');
 });


//Seleciona data
// Data Picker Initialization
$(function() {
   $('#datepicker').datepicker({
      format: 'dd/mm/yyyy',
      language: 'pt-BR'
  });
});



