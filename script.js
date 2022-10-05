
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


//Função de deixar a dat nos padroes xx/xx/xxxx
function transformaData(i) {
   var v = i.value;
   if (v.match(/^\d{2}$/) !== null) {
      this.value = v + '/';
   }
   else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
      this.value = v + '/';
   }
}


//Função de deixar o telefone nos parametros xx xxxxx-xxxx

//Seleciona data
// Data Picker Initialization
$(function() {
   $('#datepicker').datepicker({
      format: 'dd/mm/yyyy',
      language: 'pt-BR'
  });
});



