// ======================================
//              FUNCIONES
// ======================================

// Función para crear divs

function crearDivs(idNombre) {

    const div = document.createElement("div");

    div.id = idNombre;

    return div;
}


// Función para crear textos h1

function crearTextoh1(idNombre) {

    const textoh1 = document.createElement("h1");

    textoh1.id = idNombre;

    return textoh1;
}


// Función para crear textos h2

function crearTextoh2(idNombre) {

    const textoh2 = document.createElement("h2");

    textoh2.id = idNombre;

    return textoh2;
}


// Función para crear botones

function crearBoton(idNombre) {

    const boton = document.createElement("button");

    boton.id = idNombre;

    return boton;
}


// Función para crear inputs

function crearInput(idNombre) {

    const input = document.createElement("input");

    input.id = idNombre;

    return input;
}


// Función para crear formularios

function crearForm(idNombre) {

    const formulario = document.createElement("form");

    formulario.id = idNombre;

    return formulario;
}


// Función para crear columnas de la cabecera

function crearColumnaCabecera(idNombre) {

    const th = document.createElement("th");

    th.id = idNombre;

    return th;
}


// Función para crear columnas del cuerpo

function crearColumnaTbody(idNombre) {

    const td = document.createElement("td");

    td.id = idNombre;

    return td;
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

// ======================================
//        CONTENEDOR PRINCIPAL
// ======================================

const divPrincipal = crearDivs("divPrincipal");

document.body.appendChild(divPrincipal);


// ======================================
//              TÍTULO
// ======================================

const tituloPrincipal = crearTextoh1("tituloPrincipal");

tituloPrincipal.textContent = "Sistema universitario";

divPrincipal.appendChild(tituloPrincipal);


// ======================================
//          BOTÓN CREAR NOTA
// ======================================

const botonCrearNota = crearBoton("botonCrear");

botonCrearNota.textContent = "Registrar nota";

divPrincipal.appendChild(botonCrearNota);


// ======================================
//             SUBTÍTULO
// ======================================

const subtitulo = crearTextoh2("subtituloNotas");

subtitulo.textContent = "Notas";

divPrincipal.appendChild(subtitulo);


// ======================================
//              SECCIÓN
// ======================================

const seccionNotas = document.createElement("section");

divPrincipal.appendChild(seccionNotas);


// ======================================
//               TABLA
// ======================================

const tabla = document.createElement("table");

seccionNotas.appendChild(tabla);


// ======================================
//             CABECERA
// ======================================

const thead = document.createElement("thead");

tabla.appendChild(thead);


const filaCabecera = document.createElement("tr");

thead.appendChild(filaCabecera);



// Alumno

const alumno = crearColumnaCabecera("alumno");

alumno.textContent = "Alumno";

filaCabecera.appendChild(alumno);


// Materia

const materia = crearColumnaCabecera("materia");

materia.textContent = "Materia";

filaCabecera.appendChild(materia);


// Nota

const nota = crearColumnaCabecera("nota");

nota.textContent = "Nota";

filaCabecera.appendChild(nota);


// Fecha

const fecha = crearColumnaCabecera("fecha");

fecha.textContent = "Fecha";

filaCabecera.appendChild(fecha);


// Acciones

const acciones = crearColumnaCabecera("acciones");

acciones.textContent = "Acciones";

filaCabecera.appendChild(acciones);


// ======================================
//               TBODY
// ======================================

const tbody = document.createElement("tbody");

tabla.appendChild(tbody);


// ======================================
//       FILA HARDCODEADA NÚMERO 1
// ======================================

const filaUno = document.createElement("tr");

tbody.appendChild(filaUno);



// Alumno

const alumnoHCUno = crearColumnaTbody("alumnoHCUno");

alumnoHCUno.textContent = "Macarena Aguirre";

filaUno.appendChild(alumnoHCUno);


// Materia

const materiaHCUno = crearColumnaTbody("materiaHCUno");

materiaHCUno.textContent = "Base de Datos";

filaUno.appendChild(materiaHCUno);


// Nota

const notaHCUno = crearColumnaTbody("notaHCUno");

notaHCUno.textContent = "9.00";

filaUno.appendChild(notaHCUno);


// Fecha

const fechaHCUno = crearColumnaTbody("fechaHCUno");

fechaHCUno.textContent = "20/06/2026";

filaUno.appendChild(fechaHCUno);


// Acciones

const accionesHCUno = crearColumnaTbody("accionesHCUno");
accionesHCUno.className = "acciones";
filaUno.appendChild(accionesHCUno);


// Botón editar

const botonEditar = crearBoton("botonEditar");

botonEditar.textContent = "Editar";

accionesHCUno.appendChild(botonEditar);


// Botón eliminar

const botonEliminar = crearBoton("botonEliminar");

botonEliminar.textContent = "Eliminar";

accionesHCUno.appendChild(botonEliminar);


// ======================================
//       FUNCIÓN PARA CREAR FORMULARIO
// ======================================

function crearFormulario() {

    // Verificamos si ya existe el formulario
    const formularioExistente = document.getElementById("formularioNota");

    // Si ya existe, terminamos la función
    if (formularioExistente) {
        return;
    }


    // Creamos el formulario
    const formulario = crearForm("formularioNota");

    divPrincipal.appendChild(formulario);


    // Título

    const tituloFormulario = crearTextoh2("tituloFormulario");

    tituloFormulario.textContent = "Registrar nota";

    formulario.appendChild(tituloFormulario);


    // Alumno

    const inputAlumno = crearInput("inputAlumno");

    inputAlumno.placeholder = "Nombre del alumno";

    formulario.appendChild(inputAlumno);


    // Materia

    const inputMateria = crearInput("inputMateria");

    inputMateria.placeholder = "Nombre de la materia";

    formulario.appendChild(inputMateria);


    // Nota

    const inputNota = crearInput("inputNota");

    inputNota.type = "number";

    inputNota.placeholder = "Nota";

    inputNota.min = "1";

    inputNota.max = "10";

    inputNota.step = "0.01";

    formulario.appendChild(inputNota);


    // Fecha

    const inputFecha = crearInput("inputFecha");

    inputFecha.type = "date";

    formulario.appendChild(inputFecha);


    // Botón guardar

    const botonGuardar = crearBoton("botonGuardar");

    botonGuardar.textContent = "Guardar nota";

    botonGuardar.type = "button";

    formulario.appendChild(botonGuardar);

}


// ======================================
//               EVENTO
// ======================================

botonCrearNota.addEventListener(
    "click",
    crearFormulario
);

botonVolver.addEventListener("click", function(){
window.location.href = "index.html";
});