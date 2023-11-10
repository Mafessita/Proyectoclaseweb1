function insertar() {


    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");

    empleado = new Empleado(cedula.value, nombres.value, apellidos.value)

    var empleados = JSON.parse(localStorage.getItem("empleados") || "[]");
    empleados.push(empleado);
    localStorage.setItem("empleados", JSON.stringify(empleados))

    cedula.value = "";
    nombres.value = "";
    apellidos.value = "";
    cedula.focus()
}


function consultar() {

    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");

    var empleados = JSON.parse(localStorage.getItem("empleados") || "[]");
    encontrado = false

    for (let i = 0; i < empleados.length && !encontrado; i++) {

        if (empleados[i].cedula == cedula.value) {
            nombres.value = empleados[i].nombres;
            apellidos.value = empleados[i].apellidos;
            encontrado = true
        }
    }
}


function modificar() {
    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");

    var empleados = JSON.parse(localStorage.getItem("empleados") || "[]");
    encontrado = false

    for (let i = 0; i < empleados.length && !encontrado; i++) {

        if (empleados[i].cedula == cedula.value) {
            empleados[i].nombres = nombres.value;
            empleados[i].apellidos = apellidos.value;
            encontrado = true

            localStorage.setItem("empleados", JSON.stringify(empleados))

            cedula.value = "";
            nombres.value = "";
            apellidos.value = "";
            cedula.focus()
        }
    }

}

function eliminar() {

}