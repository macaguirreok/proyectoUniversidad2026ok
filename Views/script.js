
// Funciones

function crearDivs(idNombre){

    const div = document.createElement("div");
    div.id = idNombre;
    return div;

}

function crearTextoh1(idNombre){

    const textoh1 = document.createElement("h1");
    textoh1.id = idNombre;
    return textoh1;
}

function crearTextoh2(idNombre){

    const textoh2 = document.createElement("h2");
    textoh2.id = idNombre;
    return textoh2;
}

function crearTextoh3(idNombre){

    const textoh3 = document.createElement("h3");
    textoh3.id = idNombre;
    return textoh3;
}

function crearBoton(idNombre){

    const boton = document.createElement("button");
    boton.id = idNombre;
    return boton;
}

// Usando las funciones

const divPrincipal = crearDivs("divPrincipal");
document.body.appendChild(divPrincipal);

// Div uno -- sistema universitario

const divUno = crearDivs("divs");
divPrincipal.appendChild(divUno);

const tituloUno = crearTextoh1("textoUno");
tituloUno.textContent = "Sistema universitario";
divUno.appendChild(tituloUno);

const subtituloUno = crearTextoh2("subtUno");
subtituloUno.textContent = "Gestión administrativa universitaria";
divUno.appendChild(subtituloUno);

// Div dos -- alumnos


const divDos = crearDivs("divs");
divPrincipal.appendChild(divDos);

const tituloDos = crearTextoh1("textoDos");
tituloDos.textContent = "Alumnos";
divDos.appendChild(tituloDos);

const subtituloDos = crearTextoh2("subtDos");
subtituloDos.textContent = "Administración de alumnos";
divDos.appendChild(subtituloDos);

const botonIngresarDos = crearBoton("botonIngresar");
botonIngresarDos.textContent = "Ingresar";
divDos.appendChild(botonIngresarDos);

//! evento para botón ingresar al html de alumnos

botonIngresarDos.addEventListener("click", function(){
window.location.href = "alumnos.html";

} );


// Div tres -- profesores


const divTres = crearDivs("divs");
divPrincipal.appendChild(divTres);

const tituloTres = crearTextoh1("textoTres");
tituloTres.textContent = "Profesores";
divTres.appendChild(tituloTres);

const subtituloTres = crearTextoh2("subtTres");
subtituloTres.textContent = "Administración de profesores";
divTres.appendChild(subtituloTres);

const botonIngresarTres = crearBoton("botonIngresar");
botonIngresarTres.textContent = "Ingresar";
divTres.appendChild(botonIngresarTres);

//! evento para botón ingresar al html de alumnos

botonIngresarTres.addEventListener("click", function(){
window.location.href = "profesores.html";

} );


// Div cuatro -- Materias


const divCuatro = crearDivs("divs");
divPrincipal.appendChild(divCuatro);

const tituloCuatro = crearTextoh1("textoCuatro");
tituloCuatro.textContent = "Materias";
divCuatro.appendChild(tituloCuatro);

const subtituloCuatro = crearTextoh2("subtCuatro");
subtituloCuatro.textContent = "Administración de materias";
divCuatro.appendChild(subtituloCuatro);

const botonIngresarCuatro = crearBoton("botonIngresar");
botonIngresarCuatro.textContent = "Ingresar";
divCuatro.appendChild(botonIngresarCuatro);

//! evento para botón ingresar al html de alumnos

botonIngresarCuatro.addEventListener("click", function(){
window.location.href = "materias.html";

} );


// Div cinco -- Inscripciones

const divCinco = crearDivs("divs");
divPrincipal.appendChild(divCinco);

const tituloCinco = crearTextoh1("textoCinco");
tituloCinco.textContent = "Inscripciones";
divCinco.appendChild(tituloCinco);

const subtituloCinco = crearTextoh2("subtCinco");
subtituloCinco.textContent = "Gestión de inscripciones";
divCinco.appendChild(subtituloCinco);

const botonIngresarCinco = crearBoton("botonIngresar");
botonIngresarCinco.textContent = "Ingresar";
divCinco.appendChild(botonIngresarCinco);

//! evento para botón ingresar al html de alumnos

botonIngresarCinco.addEventListener("click", function(){
window.location.href = "inscripciones.html";

} );


// Div seis -- Notas

const divSeis = crearDivs("divs");
divPrincipal.appendChild(divSeis);

const tituloSeis = crearTextoh1("textoSeis");
tituloSeis.textContent = "Notas";
divSeis.appendChild(tituloSeis);

const subtituloSeis = crearTextoh2("subtSeis");
subtituloSeis.textContent = "Registro de notas";
divSeis.appendChild(subtituloSeis);

const botonIngresarSeis = crearBoton("botonIngresar");
botonIngresarSeis.textContent = "Ingresar";
divSeis.appendChild(botonIngresarSeis);

//! evento para botón ingresar al html de alumnos

botonIngresarSeis.addEventListener("click", function(){
window.location.href = "notas.html";

} );



// -- Mi nombre

const divSiete = crearDivs("divs");
divPrincipal.appendChild(divSiete);

const proyecto = crearTextoh3("textoProyecto");
proyecto.textContent = "Sistema universidad";
divSiete.appendChild(proyecto);

const maqui = crearTextoh3("textoMaqui");
maqui.textContent = "María Macarena Aguirre";
divSiete.appendChild(maqui);








