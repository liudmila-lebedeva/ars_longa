function plus(){
    //сложение
    var num1, num2, result;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);
   
    //parseInt обрезает строку до нужного значения - цифры 
    
    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);
    
    result = num1+num2;
    document.getElementById("out").innerHTML = result;
    //присвоение результата параграфу
    
}

function minus(){
    //вычитание
    var num1, num2, result;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);
    
    result = num1-num2;
    document.getElementById("out").innerHTML = result;
    
}

function multip(){
    var num1, num2, result;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);
    
    result = num1*num2;
    document.getElementById("out").innerHTML = result;
}

