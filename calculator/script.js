const buttons=document.querySelectorAll('button');
var tb=document.getElementById("t1");
var data =" ";
buttons.forEach(button =>{
    button.addEventListener('click',handleClick, false);
});
 function handleClick(){
        if(this.textContent == "C")
        {
           data = " ";
           tb.value = data;
        }
        else if(this.textContent == "=") {
            data = eval(data);
            tb.value=data; 
        }
        else {
            data = data + this.textContent;
            tb.value=data;
        }
 }