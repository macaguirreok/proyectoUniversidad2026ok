
// Función para crear divs

function crearDivs(idNombre){

    const div = document.createElement("div");
    div.id = idNombre;
    return div;

}

// Función para crear texto h1

function crearTextoh1(idNombre){

    const textoh1 = document.createElement("h1");
    textoh1.id = idNombre;
    return textoh1;
}

// Función para crear texto h2

function crearTextoh2(idNombre){

    const textoh2 = document.createElement("h2");
    textoh2.id = idNombre;
    return textoh2;
}

// Función para crear botón

function crearBoton(idNombre){

    const boton = document.createElement("button");
    boton.id = idNombre;
    return boton;
}

// No voy a hacer todavía a table como function

// Función para crear form

function crearForm(idNombre){

    const form = document.createElement("form");
    form.id = idNombre;
    return form;
}

// Función para crear input

function crearInput(idNombre){

    const input = document.createElement("input");
    input.id = idNombre;
    return input;
}

// ======================================
//        BOTON VOLVER AL HOME
// ======================================

const contenedorBoton = document.createElement("div");
contenedorBoton.id = "contenedorBoton";
document.body.appendChild(contenedorBoton);


const botonVolver = crearBoton("btnVolver");
botonVolver.textContent = "Volver al inicio";
contenedorBoton.appendChild(botonVolver);


//** Arrancamos con el primer div */

const divPrincipal = crearDivs("divPrincipal");
document.body.appendChild(divPrincipal);

const textoPrincipal = crearTextoh1("SistUniv");
textoPrincipal.textContent = "Sistema universitario";
// Lo agregamos al divPrincipal
divPrincipal.appendChild(textoPrincipal);

// Creamos el botón de crear profesor

const botonCrearProf = crearBoton("botonCrear");
botonCrearProf.textContent = "Crear profesor";
divPrincipal.appendChild(botonCrearProf);

// Creo subtitulo h2, profesores

const Textoh2 = crearTextoh2("textoSubtit");
Textoh2.textContent = "Profesores";
divPrincipal.appendChild(Textoh2);

// Creo sección alumnos para poner la tabla

const seccionProfesores = document.createElement("section");
divPrincipal.appendChild(seccionProfesores);

const tabla = document.createElement("table");
seccionProfesores.appendChild(tabla);

const cabeceraTabla = document.createElement("thead");
tabla.appendChild(cabeceraTabla);

const filaCabecera = document.createElement("tr");
cabeceraTabla.appendChild(filaCabecera);

// Función para crear columnas (th) en la filaCabecera

function crearColumnaCabecera(idNombre){

    const th = document.createElement("th");
    th.id = idNombre;
    return th;
}

const nombreProfesor = crearColumnaCabecera("nombreProf");
nombreProfesor.textContent = "Nombre";
filaCabecera.appendChild(nombreProfesor);

const acciones = crearColumnaCabecera("acciones");
acciones.textContent = "Acciones";
filaCabecera.appendChild(acciones);

//creo el tbody

const tbody = document.createElement("tbody");
tabla.appendChild(tbody);

const tr = document.createElement("tr");
tbody.appendChild(tr);

//*** Datos hardcodeados */

// Función para crear columnas (td) en la filaCabecera

function crearColumnaTbody(idNombre){

    const td = document.createElement("td");
    td.id = idNombre;
    return td;
}

const nombreHCProf = crearColumnaTbody("HCnombreProf");
nombreHCProf.textContent = "Laurita";
tr.appendChild(nombreHCProf);

const accionesHC = crearColumnaTbody("HCacciones");
accionesHC.className = "acciones";
tr.appendChild(accionesHC);

//creo los dos botones que van en acciones

const botonEditar = crearBoton("btnEditar");
botonEditar.textContent = "Editar";
accionesHC.appendChild(botonEditar);

const botonEliminar = crearBoton("btnEliminar");
botonEliminar.textContent = "Eliminar";
accionesHC.appendChild(botonEliminar);

//* Me falta la parte de abajo ahora, el FORM

function crearFormulario() {

    // Verificamos si ya existe el formulario
    const formularioExistente = document.getElementById("formu");

    // Si ya existe, terminamos la función
    if (formularioExistente) {
        return;
    }


    // Creamos el formulario
    const formulario = crearForm("formu");

    divPrincipal.appendChild(formulario);


    // Agregamos el título
    const titulo = crearTextoh2("CrearProf");

    titulo.textContent = "Crear profesor";

    formulario.appendChild(titulo);


    // Agregamos el input
    const input = crearInput("inputNombre");

    input.placeholder = "Nombre del profesor";

    formulario.appendChild(input);


    // Agregamos el botón
    const botonAgregar = crearBoton("guardar");

    botonAgregar.textContent = "Guardar profesor";

    botonAgregar.type = "button";

    formulario.appendChild(botonAgregar);

}

// -- Eventos en el botón crear

botonCrearProf.addEventListener("click" , crearFormulario);

//! Evento botón para volver al inicio

botonVolver.addEventListener("click", function(){
window.location.href = "index.html";
});







