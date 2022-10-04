
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


//Função de deixar o telei=one nos parametros xx xxxxx-xxxx

function transformaTel(i){
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "13");
   if (v.length == 2) i.value += " ";
   if (v.length == 8) i.value += "-";

}

//Seleciona data
// Data Picker Initialization
$(function() {
  $('#datepicker').datepicker();
});



