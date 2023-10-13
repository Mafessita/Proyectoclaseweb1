function crearNodo(nodo, texto) {

    var nodo = document.createElement(nodo);

    var textoNodo = document.createTextNode(texto);

    nodo.appendChild(textoNodo);

}
//-------------------------------------------------------------

function crearNodoGenerico(nodo) {

    var nodo = document.createElement(nodo);
    return nodo;

    // return document.createElement(nodo);
}

function crearNodoTexto(nodo, texto) {

    var nodo= crearNodoGenerico(nodo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);

    return nodo;
}

function adicionarBody(nodo) {

    document.body.appendChild(nodo);

}

function crearNodoImagen(url, alt) {

    var nodo= crearNodoGenerico('img');
    nodo.src = url;
    nodo.alt = alt;

    return nodo;
    
}

function adicionarNodoAContenedor(nodo,contenedor) {

    contenedor.appendChild(nodo);
    
}