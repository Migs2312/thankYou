const developer = document.getElementById('devName');

//Desenvolvedor
function dev() {
    developer.classList.add("opacity_change");
    setTimeout(() => {
        developer.style.opacity = "90%";
    }, 80);
};
function offDev(){
            developer.classList.remove("opacity_change");
            developer.style.opacity = "0%";
};
//Desenvolvedor