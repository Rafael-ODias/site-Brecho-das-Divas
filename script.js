var a = document.getElementById("p");
console.log(a)

function clicar(){
    a.innerHTML = "Juntos nessa Escolha!";
    a.setAttribute("class", "cor");
}

element.addEventListener('mouseover', function () {
    element.style.color = 'blue';
});

document.addEventListener("DOMContentLoaded", function() {
    const resizeButton = document.getElementById("resizeButton");

    resizeButton.addEventListener("click", function() {
        
        this.style.padding = "20px 40px";
        this.style.fontSize = "20px";
    });
});

