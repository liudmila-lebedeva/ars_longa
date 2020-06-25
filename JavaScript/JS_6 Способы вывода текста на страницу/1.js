function out(){
   var p;
    p = document.getElementById('out');
   //p.innerHTML = 'Hello';
    //p.innerHTML += '<b> Hello</b>';
    // это добавляет текст, а не заменяет
    //p.innerText += ' Hi'; //теги выводятся но не обрабатываются
    //p.insertAdjacentHTML('beforeBegin','hi');
    //beforebegin перед открывающим тегом
    //p.insertAdjacentHTML('afterBegin','Hi');
    //afterBegin после закрывающего тега но перед содержимым
    //p.insertAdjacentHTML('beforeEnd','Hi');
    //afterEnd перед закрывающего тега но после текста
    //p.insertAdjacentHTML('afterEnd','Hi');
    //afterEnd после закрывающего тега но после текста
    p.outerHTML = '<div class="one">hello</div>';
    //замена тега
     
}