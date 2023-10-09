function poblarDatosPaises() {
    var url = 'https://restcountries.com/v3.1/independent?status=true'
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {
            //crearListaPaises(paises);
            adicionarDatosATablas(paises);
            mostrarClaveMoneda(paises);
        });
            /*Hacen lo mismo pero tiene sintaxis diferentes
            console.log(json[0].name.common);
            console.log(json[2].currencies.XCD.name);
            for (pais of paises) {
            console.log(pais.name.common);
           }

            for (let i = 0; i < paises.length; i++) {
                console.log(paises[i].name.common);

            }
            function crearListaPaises(paises) {
                var ul = crearNodoGenerico('ul');
                for (const pais of paises) {
                    var li = crearNodoTexto('li', pais.name.common);
                    adicionarNodoAContenedor(li, ul);
                }
                adicionarNodoBody(ul);
            }*/
            function mostrarClaveMoneda(paises){
                for (const pais of paises){
                    var currencies = pais.currencies;
                    var claves = Object.keys(currencies);
                    var ul = crearNodoGenerico('ul');
                    for (const clave of claves){
                        console.log(currencies[clave].name)
                        var li = crearNodoTexto('li', pais.currencies[clave].name);
                        adicionarNodoAContenedor(li, ul);
                    }
                    adicionarNodoAContenedor(ul, columnaMoneda);
                }

            }

            function adicionarDatosATablas(paises){
                var tabla = document.getElementById("tablaPaises");
                for (const pais of paises){
                    var fila = tabla.insertRow(-1);
                    var columnaNombre = fila.insertCell(0);
                    var columnaIdiomas = fila.insertCell(1);
                    var columnaMoneda = fila.insertCell(2);
                    var columnaCapitales = fila.insertCell(3);
                    var columnaPoblacion = fila.insertCell(4);
                    var columnaBanderas = fila.insertCell(5);

                    columnaNombre.innerHTML = pais.name.common;
                    columnaIdiomas.innerHTML = pais.languages;
                    columnaMoneda.innerHTML = pais.currencies;
                    columnaCapitales.innerHTML = pais.capital[0];
                    columnaPoblacion.innerHTML = pais.population;
                    columnaBanderas.innerHTML = pais.flags.png;

                }
            }
           
        

}