document.getElementById("formCalcular").addEventListener("submit", function(event){
  
  let numero1 = parseFloat(document.getElementById('numero1').value);
  let numero2 = parseFloat(document.getElementById('numero2').value);
  let operacao = document.querySelector('input[name=operacao]:checked').value;
  
  var resultado = 0;
  if( operacao ==='adicao' ){
    resultado = numero1 + numero2;
  } else if( operacao === 'subtracao' ){
    resultado = numero1 - numero2;
  } else if( operacao ==='multiplicacao' ){
    resultado = numero1 * numero2;
  } else if( operacao === 'divisao' ){
    if( numero2 = 0 ){
      alert('Não exite divisão por zero, selecionar outro número.');
      return false;
    } else {
      resultado = numero1 / numero2;
    }
    
  } else {
    alert('Operação não localizada.');
    return false;
  }
  
  document.getElementById('resultado').value = resultado;
  
  event.preventDefault();
});
