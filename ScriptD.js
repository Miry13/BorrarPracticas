function guardarRegistro() {
    var Nombres = document.getElementById("nombre").value;
    var Apellidos = document.getElementById("apellido").value;
    var Cedula = document.getElementById("cedula").value;
    var Edad = document.getElementById("edad").value;

    if (Nombres && Apellidos && Cedula && Edad) {
        var table = document.getElementById("tablaCuerpo");
        var miru = table.insertRow();
        miru.innerHTML = `
            <td>${Nombres}</td>
            <td>${Apellidos}</td>
            <td>${Cedula}</td>
            <td>${Edad}</td>`;
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("cedula").value = "";
        document.getElementById("edad").value = "";
    } else {
        alert("Llena los campos primero, si no, obvio no te va a guardar nada gil.");
    }
}

function eliminarRegistro(button) {
    var miru = button.parentNode.parentNode;
    miru.parentNode.removeChild(miru);
}
function editarRegistro(button) {
    var miru = button.parentNode.parentNode;
    document.getElementById("nombre").value = miru.cells[0].innerText;
    document.getElementById("apellido").value = miru.cells[1].innerText;
    document.getElementById("cedula").value = miru.cells[2].innerText;
    document.getElementById("edad").value = miru.cells[3].innerText;

    miru.parentNode.removeChild(miru);
}