function calcular(){
    var celsius=parseFloat(inputCelsius.value)
    var fahren=parseFloat((celsius*(9/5))+32)
    
    inputResultado.innerHTML=celsius+" Celsius para Fahrenheit são "+ fahren
     
   }