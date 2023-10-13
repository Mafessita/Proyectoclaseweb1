function poblarDatosPaises() {

    var url = 'https://restcountries.com/v3.1/independent?status=true';
   
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then(paises => {

        // crearListaPaises(paises);
        adicionarDatosATabla(paises) 
    });

    function crearListaPaises(paises){

        var ul =crearNodoGenerico('ul')
        
        
        for (const pais of paises) {
            var li = crearNodoTexto('li', pais.name.common);
            adicionarNodoAContenedor(li,ul);
        }
        adicionarBody(ul);
    }
    
    function adicionarDatosATabla(paises) {
        
        var tabla = document.getElementById("tablaPaises");
 
            
           
        for (const pais of paises) {
            var currencies=pais.currencies;
            var claves=Object.keys(currencies);

            


            for (const clave of claves) {
                
            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaIdioma=fila.insertCell(1);
            var columnaMoneda=fila.insertCell(2);
            var columnaCapital = fila.insertCell(3);
            var columnaPoblacion = fila.insertCell(4);
            var columnaBanderas = fila.insertCell(5);
            columnaMoneda.innerHTML=currencies[clave].name;
            columnaNombre.innerHTML=pais.name.common;
            columnaIdioma.innerHTML=pais.languages;
            columnaPoblacion.innerHTML=pais.population;
            columnaCapital.innerHTML=pais.capital[0];
            columnaBanderas.innerHTML=pais.flags.png;
         
            }
           
           
        }

        for (const pais of paises) {
            var languages=pais.languages;
            var claves1=Object.keys(languages);

            
            for (const clave11 of claves1) {
                
                var fila = tabla.insertRow(-1);
                var columnaNombre = fila.insertCell(0);
                var columnaIdioma=fila.insertCell(1);
                var columnaMoneda=fila.insertCell(2);
                var columnaCapital = fila.insertCell(3);
                var columnaPoblacion = fila.insertCell(4);
                var columnaBanderas = fila.insertCell(5);
            //   columnaMoneda.innerHTML=currencies[clave].name;
                columnaNombre.innerHTML=pais.name.common;
                columnaIdioma.innerHTML=currencies[clave11].name;
                columnaPoblacion.innerHTML=pais.population;
                columnaCapital.innerHTML=pais.capital[0];
                columnaBanderas.innerHTML=pais.flags.png;
             
                }
        }

    }














}