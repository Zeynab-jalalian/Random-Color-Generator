let box = document.querySelector(".box");

function colorChange(color) {
   let codeDiv = document.createElement("div");
    codeDiv.classList.add("codeStyle");
    codeDiv.appendChild(document.createTextNode(color));


    box.style.background=color;
    box.appendChild(codeDiv);

}
