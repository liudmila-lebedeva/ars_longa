function f1(){
    var n, p;
    //число, которое ввел пользователь
    n = document.getElementById('num1').value;
    //это переменная, чтобы быстро обратиться к парагафу:
    p = document.getElementById('out');
    //отфильтрует только цифры:
    n = parseInt(n);

    
        
    if (n==100) {
        p.innerHTML = 'число равно 100';
    }
    
   else if (n<100) {
        p.innerHTML = 'число меньше 100';
    } 
    
    else {
        p.innerHTML = 'число больше 100';
    }
    
}
