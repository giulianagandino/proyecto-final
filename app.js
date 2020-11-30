const elementoNombre = document.getElementById('nombre');
const elementoAutor = document.getElementById('autor');
const elementoTiempoPreparacion = document.getElementById('tiempo-preparación');
const elementoIngredientes = document.getElementById('ingredientes');
const elementoProcedimiento = document.getElementById('procedimiento');
const elementoBoton = document.getElementById('agregar');
elementoBoton.addEventListener('click', manejadorClick);

//const receta = obtenerReceta
//CONTROLAR
const recetas = obtenerRecetasDeStorge();
for(receta of recetas){
    agregarALista(receta);
}

function manejadorClick() {
    const recetaAAgregar = { nombre: obtenerNombre(), autor: obtenerAutor(), tiempoPreparación: obtenerTiempoPreparacion(), ingredientes: obtenerIngredientes(), procedimiento: obtenerProcedimiento()};
    if(obtenerNombre().length !== 0 && obtenerAutor().length !== 0 && obtenerTiempoPreparacion().length !== 0 && obtenerIngredientes().length !==0 && obtenerProcedimiento().length !==0) {
        agregarALista(recetaAAgregar);
        agregaraAStorage(recetaAAgregar);
        vaciarCampos();
    }
}
//muy largo - acortar !

function agregaraAStorage(receta){
    const receta = obtenerRecetasDeStorge();
    recetas.push(receta);
    localStorage.setItem("listaDeRecetas", JSON.stringify(recetas));
}

function obtenerRecetasDeStorge() {
    let recetas = localStorage.getItem("recetaAgregada");
    if(recetas === null ) {
        return [];
    }
    return JSON.parse(recetas);
}

function vaciarCampos() {
    vaciarCampoNombre();
    vaciarCampoAutor();
    vaciarCampoTiempoPreparacion();
    vaciarCampoIngredientes();
    vaciarCampoProcedimiento();
}

function obtenerNombre() {
    return elementoNombre.value;
}
function obtenerAutor() {
    return elementoAutor.value;
}

function obtenerTiempoPreparacion() {
    return elementoTiempoPreparacion.value;
}

function obtenerIngredientes() {
    return elementoIngredientes.value;
}

function obtenerProcedimiento() {
    return elementoProcedimieto.value;
}

//function obtenerReceta(){
//    return 
//}
function vaciarCampoNombre() {
    elementoNombre.value = '';
}

function vaciarCampoAutor() {
    elementoAutor.value = '';
}

function vaciarCampoTiempoPreparacion() {
    elementoTiempoPreparación.value = '';
}

function vaciarCampoIngredientes() {
    elementoIngredientes.value = '';
}

function vaciarCampoProcedimiento() {
    elementoProcedimiento.value = '';
}

function agregarALista(receta) {
    const elementoNuevo = document.createElement('li');
    elementoNuevo.innerHTML = `<span class="apellido">${persona.apellido}</span>, <span class="nombre">${persona.nombre}</span>`
    document.getElementById('lista').appendChild(elementoNuevo);
}
