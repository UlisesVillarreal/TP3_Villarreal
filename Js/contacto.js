let usuarioAutenticado = false;

const formulario = document.getElementById("formTarjeta");

formulario.addEventListener("submit", function(event){
    event.preventDefault();


    // Agregamos los datos a la tarjeta
    const usuario = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if(usuario === "admin" && password === "password"){
        usuarioAutenticado = true;
        console.log("Usuario valido");
        alert("Se ah cargado los datos en la tarjeta con éxito!");

        const nombre=document.getElementById("nombre").value;
        const apellido=document.getElementById("apellido").value
        const edad=document.getElementById("edad").value;
        const pais=document.getElementById("pais").value;

        document.getElementById("cardNombre").textContent =
            `Nombre: ${nombre}`;
        document.getElementById("cardApellido").textContent =
            `Apellido: ${apellido}`;
        document.getElementById("cardEdad").textContent =
            `Edad: ${edad}`;
        document.getElementById("cardPais").textContent =
            `País: ${pais}`;


        // seleccion de genero
        const generoSeleccionado = document.querySelector('input[name="genero"]:checked').value;
        document.getElementById("cardGenero").textContent = `Género: ${generoSeleccionado}`;


        // selección de intereses
        const interesesSeleccionados = document.querySelectorAll('input[name="intereses"]:checked');
        const intereses = [];

        interesesSeleccionados.forEach(interes => {
            intereses.push(interes.value);
        });

        document.getElementById("cardIntereses").textContent =
        `Intereses: ${intereses.join(", ")}`;

        formulario.reset();

    }else{
        alert("Usuario o contraseña incorrectos, recuerda; usuario: admin contraseña: password");
        console.log("Usuario Inválido");
        return;
    }
});


// Agregar una opinión
const btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", function(){
    if(!usuarioAutenticado){
        alert("Primero debe ingresar una cuenta válida.");
        return;
    }
    const mensaje = document.getElementById("mensaje").value;

    if(mensaje.trim() === ""){
        console.log("No se ingresó opinión válida")
        return;
    }

    const nuevaOpinion = document.createElement("li");

    nuevaOpinion.textContent = mensaje;

    document.getElementById("listaOpiniones")
        .appendChild(nuevaOpinion);
        console.log("Se agregó una opinión")
    document.getElementById("mensaje").value = "";

});


//eliminar la última opción
const btnEliminar = document.getElementById("btnEliminar");

btnEliminar.addEventListener("click", function(){

    const lista = document.getElementById("listaOpiniones");

    if(lista.lastElementChild){
        lista.lastElementChild.remove();
        console.log("Se eliminó una opinión")
    }

});