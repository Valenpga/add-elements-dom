 // Aquí tu código
/*const body = document.querySelectorAll("#body")*/
const elementUl = document.getElementById("lista");
const elementButton = document.getElementById("agregar");

elementButton.addEventListener("click", function(){
    const element = prompt("Escribe tu elemento");
    elementUl.insertAdjacentHTML("afterbegin",`<li>${element}</li>`)
    

});







