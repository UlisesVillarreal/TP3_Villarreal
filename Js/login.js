const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const usuario = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if(usuario === "admin" && password === "password"){
        window.location.href = "./index.html";
    }else{
        alert("Usuario o contraseña incorrectos");
    }

});

function cerrarPopup(){
    document.getElementById("bienvenida").style.display = "none";
}