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


// Función para crear columnas de la tabla

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
//        BOTÓN CREAR INSCRIPCIÓN
// ======================================

const botonCrearInscripcion = crearBoton("botonCrear");

botonCrearInscripcion.textContent = "Crear inscripción";

divPrincipal.appendChild(botonCrearInscripcion);


// ======================================
//             SUBTÍTULO
// ======================================

const subtitulo = crearTextoh2("subtituloInscripciones");

subtitulo.textContent = "Inscripciones";

divPrincipal.appendChild(subtitulo);


// ======================================
//              SECCIÓN
// ======================================

const seccionInscripciones = document.createElement("section");

divPrincipal.appendChild(seccionInscripciones);


// ======================================
//               TABLA
// ======================================


const tabla = document.createElement("table");

seccionInscripciones.appendChild(tabla);


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


// Fecha

const fecha = crearColumnaCabecera("fecha");

fecha.textContent = "Fecha de inscripción";

filaCabecera.appendChild(fecha);


// Año

const anio = crearColumnaCabecera("anio");

anio.textContent = "Año de cursada";

filaCabecera.appendChild(anio);


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


// Fecha

const fechaHCUno = crearColumnaTbody("fechaHCUno");

fechaHCUno.textContent = "16/06/2026";

filaUno.appendChild(fechaHCUno);


// Año

const anioHCUno = crearColumnaTbody("anioHCUno");

anioHCUno.textContent = "2026";

filaUno.appendChild(anioHCUno);


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

    const formulario = crearForm("formularioInscripcion");

    divPrincipal.appendChild(formulario);


    // Título del formulario

    const tituloFormulario = crearTextoh2("tituloFormulario");

    tituloFormulario.textContent = "Crear inscripción";

    formulario.appendChild(tituloFormulario);


    // Input alumno

    const inputAlumno = crearInput("inputAlumno");

    inputAlumno.placeholder = "Nombre del alumno";

    formulario.appendChild(inputAlumno);


    // Input materia

    const inputMateria = crearInput("inputMateria");

    inputMateria.placeholder = "Nombre de la materia";

    formulario.appendChild(inputMateria);


    // Input fecha

    const inputFecha = crearInput("inputFecha");

    inputFecha.type = "date";

    formulario.appendChild(inputFecha);


    // Input año

    const inputAnio = crearInput("inputAnio");

    inputAnio.type = "number";

    inputAnio.placeholder = "Año de cursada";

    formulario.appendChild(inputAnio);


    // Botón guardar

    const botonGuardar = crearBoton("botonGuardar");

    botonGuardar.textContent = "Guardar inscripción";

    formulario.appendChild(botonGuardar);
}


// ======================================
//               EVENTO
// ======================================

botonCrearInscripcion.addEventListener(
    "click",
    crearFormulario
);