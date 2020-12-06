const elementoNombre = document.getElementById('nombre');
const elementoAutor = document.querySelector('#autor');
const elementoTiempoPreparacion = document.querySelector('#tiempo-preparacion');
const elementoIngredientes = document.querySelector('#ingredientes');
const elementoProcedimiento = document.querySelector('#procedimiento');
const elementoBoton = document.querySelector('#btn-agregar');
const elementoListaRecetas = document.querySelector('.lista-recetas')

elementoBoton = addEventListener('click', agregarReceta);

function agregarReceta() {
    const receta = {
        nombre: elementoNombre.value,
        autor: elementoAutor.value,
        tiempoPreparacion: elementoTiempoPreparacion.value,
        ingredientes: elementoIngredientes.value,
        procedimiento: elementoProcedimiento.value,
    };
    const elementoReceta = crearElementoReceta(receta);
    elementoListaRecetas.appendChild(elementoReceta);
    agregarRecetasAAlmacenamiento(receta);
}

function agregarRecetasAAlmacenamiento(receta) {
    let recetasAlmacenadas = JSON.parse(localStorage.getItem('recetas'));
    if(!recetasAlmacenadas) {
        recetasAlmacenadas = [];
    }
    recetasAlmacenadas.push(receta);
    localStorage.setItem('recetas', JSON.stringify(recetasAlmacenadas));
}

function crearElementoReceta(receta) {
    const elementoReceta = crearElementoConClaseYTexto('article', 'receta');
    const elementoHeader = crearHeader(receta.nombre, receta.autor);
    elementoReceta.appendChild(elementoHeader);
    const elementoCuerpo = crearCuerpo(receta);
    elementoReceta.appendChild(elementoCuerpo);
    return elementoReceta;
}

function crearHeader(nombre, autor){
    const elementoHeader = crearElementoConClaseYTexto('header', 'titulo');
    const elementoNombre = crearElementoConClaseYTexto('span', 'nombre', nombre);
    const elementoAutor = crearElementoConClaseYTexto('span', 'autor', autor);
    elementoHeader.appendChild(elementoNombre);
    elementoHeader.appendChild(elementoAutor);
    return elementoHeader;
}

function crearCuerpo(receta) {
    const elementoCuerpo = crearElementoConClaseYTexto('div', 'cuerpo');
    const elementoTiempoPreparacionDos = crearElementoConClaseYTexto('p', 'tiempo-preparacion', receta.tiempoPreparacion);
    const elementoIngredientesDos = crearIngrediente(receta.ingredientes);
    const elementoProcedimientoDos = crearElementoConClaseYTexto('div', 'procedimiento', receta.procedimiento);
    elementoCuerpo.appendChild(elementoTiempoPreparacionDos);
    elementoCuerpo.appendChild(elementoIngredientesDos);
    elementoCuerpo.appendChild(elementoProcedimientoDos);
    return elementoCuerpo;
}

function crearIngrediente(ingredientes) {
    const elementoIngredientesDos = crearElementoConClaseYTexto('ul', 'ingredientes');
    const arrayIngredientes = ingredientes.split(',');
    for(const ingrediente of arrayIngredientes) {
        const elementoIngrediente = document.createElement('li');
        elementoIngrediente.innerText.trim();
        elementoIngredientesDos.appendChild(elementoIngrediente); 
    }
    return elementoIngredientesDos;
}

function crearElementoConClaseYTexto(etiqueta, clase, texto) {
    const elemento = document.createElement(etiqueta);
    elemento.classList.add(clase);
    if(texto) {
        elemento.innerText = texto;
    }
    return elemento;
}