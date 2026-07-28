
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


//** Arrancamos con el primer div */

const divPrincipal = crearDivs("divPrincipal");
document.body.appendChild(divPrincipal);

const textoPrincipal = crearTextoh1("SistUniv");
textoPrincipal.textContent = "Sistema universitario";
// Lo agregamos al divPrincipal
divPrincipal.appendChild(textoPrincipal);

// Creamos el botón de crear materia

const botonCrearProf = crearBoton("botonCrear");
botonCrearProf.textContent = "Crear Materia";
divPrincipal.appendChild(botonCrearProf);

// Creo subtitulo h2, Materias

const Textoh2 = crearTextoh2("textoSubtit");
Textoh2.textContent = "Materias";
divPrincipal.appendChild(Textoh2);

// Creo sección materias para poner la tabla

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

const nombreProfesor = crearColumnaCabecera("nombreMateria");
nombreProfesor.textContent = "Materia";
filaCabecera.appendChild(nombreProfesor);

const materia = crearColumnaCabecera("columnaMateria");
materia.textContent = "Profesor";
filaCabecera.appendChild(materia);

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

const nombreHCMateria = crearColumnaTbody("HCnombreMateria");
nombreHCMateria.textContent = "Química";
tr.appendChild(nombreHCMateria);

const nombreHCprofesor = crearColumnaTbody("HCnombreProfesor");
nombreHCprofesor.textContent = "Laurita";
tr.appendChild(nombreHCprofesor);

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

function crearFormulario(){

const formulario = crearForm("formu");
divPrincipal.appendChild(formulario);

//Agregamos el título
const titulo = crearTextoh2("CrearProf");
titulo.textContent = "Crear materia";
formulario.appendChild(titulo);

// Agrego el input

const input = crearInput("inputNombre");
input.placeholder = "Nombre de la materia";
formulario.appendChild(input);

const botonAgregar = crearBoton("guardar");
botonAgregar.textContent = "Guardar materia";
formulario.appendChild(botonAgregar);


}

// -- Eventos en el botón crear

botonCrearProf.addEventListener("click" , crearFormulario);







