

// ======================================
//        BOTON VOLVER AL HOME
// ======================================

const contenedorBoton = document.createElement("div");
contenedorBoton.id = "contenedorBoton";
document.body.appendChild(contenedorBoton);


const botonVolver = document.createElement("button");
botonVolver.textContent = "Volver al inicio";
botonVolver.className = "btnVolver";
contenedorBoton.appendChild(botonVolver);

//* Creo un contenedor principal

const divPrincipal = document.createElement("div");

divPrincipal.id = "divPrincipal";

document.body.appendChild(divPrincipal);

//* Creo titulo

const titulo = document.createElement("h1");

titulo.textContent = "Sistema universitario";

divPrincipal.appendChild(titulo);

//* Creo menú

const menu = document.createElement("nav");

divPrincipal.appendChild(menu);


// *Creo botón de alumnos

const botonCrearALumnos = document.createElement("button");

botonCrearALumnos.textContent = "Crear alumno";

menu.appendChild(botonCrearALumnos);


//* Creo sección de alumnos (la tablita donde se van a mostrar los detalles)

// Section: es como un div, pero más específico. Una sección temática de la página.

const seccionAlumnos = document.createElement("section");

divPrincipal.appendChild(seccionAlumnos);

// -- Ahora le creo un título

const subtitulo = document.createElement("h2");

subtitulo.textContent = "Alumnos";

seccionAlumnos.appendChild(subtitulo);

// -- Agora la tabla

const tabla = document.createElement("table");

seccionAlumnos.appendChild(tabla);

// -- Creamos la cabecera de la tabla 

const thead = document.createElement("thead");

tabla.appendChild(thead);

// -- Fila de cabecera

const filaCabecera = document.createElement("tr");

thead.appendChild(filaCabecera);

// -- Ahora agregamos tres columnas
// -- ...Columna nombre

const thNombre = document.createElement("th");

thNombre.textContent = "Nombre";

filaCabecera.appendChild(thNombre);

// -- ...Columna edad

const thEdad = document.createElement("th");

thEdad.textContent = "Edad";

filaCabecera.appendChild(thEdad);

// -- Columna acciones

const thAccion = document.createElement("th");

thAccion.textContent = "Acciones";

filaCabecera.appendChild(thAccion);

// -- Agregamos el tbody, donde van los datos
// -- estarán vacíos, después los rellena el backend.


const tbody = document.createElement("tbody"); 

tabla.appendChild(tbody);


/* ---------------- */
/* HARDCOAMOS DATOS */
/* ---------------- */

// -- Creamos una fila

const filaUno = document.createElement("tr");

tbody.appendChild(filaUno);

// -- Creo una por una las columnas de esa fila

const tdNombre = document.createElement("td");

tdNombre.textContent = "Macarena Aguirre";

filaUno.appendChild(tdNombre);

// -- Fila edad

const tdEdad = document.createElement("td");

tdEdad.textContent = 28;

filaUno.appendChild(tdEdad);

/* ------- Acciones ------- */

const tdAcciones = document.createElement("td");

tdAcciones.className = "acciones";

filaUno.appendChild(tdAcciones);

//Porque los botones son los que le dan la "acción"

const botonEditar = document.createElement("button");

botonEditar.textContent = "Editar";

tdAcciones.appendChild(botonEditar);

// Botón eliminar, a la par del de editar en el mismo td que editar justamente

const botonEliminar = document.createElement("button");

botonEliminar.textContent = "Eliminar";

tdAcciones.appendChild(botonEliminar);

//! evento para el botón de crear alumno

//!primero: function mosrarFormulario

function mostrarFormularioAlumno() {

    // Verificamos si ya existe el formulario
    const formularioExistente = document.getElementById("formularioAlumno");

    // Si ya existe, terminamos la función
    if (formularioExistente) {
        return;
    }


    // Creamos el formulario
    const formulario = document.createElement("form");

    // Le asignamos un id para poder identificarlo
    formulario.id = "formularioAlumno";

    // Agregamos el formulario al contenedor principal
    divPrincipal.appendChild(formulario);


    // -- Agregamos el título:

    const tituloFormulario = document.createElement("h2");

    tituloFormulario.textContent = "Crear alumno";

    formulario.appendChild(tituloFormulario);


    // -- Agregamos el campo de nombre:

    const inputNombre = document.createElement("input");

    inputNombre.placeholder = "Nombre del alumno";

    formulario.appendChild(inputNombre);


    // -- Agregamos el campo de edad:

    const inputEdad = document.createElement("input");

    inputEdad.placeholder = "Edad";

    formulario.appendChild(inputEdad);


    // -- Agregamos el botón guardar:

    const botonGuardar = document.createElement("button");

    botonGuardar.textContent = "Guardar alumno";

    formulario.appendChild(botonGuardar);

}

//! usamos la función en el evento:

botonCrearALumnos.addEventListener("click" , mostrarFormularioAlumno);

//! Evento botón para volver al inicio

botonVolver.addEventListener("click", function(){
window.location.href = "index.html";
});














