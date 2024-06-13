document.addEventListener('DOMContentLoaded',() =>{
    let t1=document.getElementById('t1');
    let tlist=document.getElementById('myul');
    let button=document.getElementById('b1');
    //function to add task
function addtask()
{
   let inputtask=t1.value;
   if(inputtask==''){
    alert("please enter  a task..");
    return;
   }
   
   let newtask=document.createElement("li");
   newtask.textContent=inputtask;
   var span =document.createElement('SPAN');
    var txt= document.createTextNode('\u00D7');
 

   span.append(txt);
  alert ("task added successfully!!");
 newtask.append(span);
  tlist.appendChild(newtask);
  t1.value='';
}
button.addEventListener('click',addtask);
var l1=document.querySelector('ul');
l1.addEventListener('click', function(ev) {
  if(ev.target.tagName ==='LI')
  {
    ev.target.classList.toggle('checked');
    
  }
  else if (ev.target.tagName==="SPAN")
  {
    ev.target.parentElement.remove();
  }
},false);
 


});
