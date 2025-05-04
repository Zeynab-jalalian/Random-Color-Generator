let box=document.querySelector(".box");

function colorChange(color){
    let codeColorDiv=document.createElement("div");
    codeColorDiv.classList.add("codeStyle");
    codeColorDiv.appendChild(document.createTextNode(color));
    
    if(box.hasChildNodes){
        box.innerHTML='';
    }
   let span= document.querySelectorAll("span");
   span.forEach(function(item){
    item.classList.remove("active");
   })
   event.target.classList.add("active");

    box.style.background=color;
    box.appendChild(codeColorDiv);
}