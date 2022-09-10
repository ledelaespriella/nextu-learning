function limpiarErrores() {
    var errores = document.getElementsByClassName("error");
    for (var i = 0; i < errores.length; i++) {
        errores[i].innerHTML = "";
    }
}

function guardar(form) {
    limpiarErrores();
    if (form.pais.value == "") {
        document.getElementById("errorPais").innerText = "Campo obligatorio";
        form.pais.focus();
        return false;
    }
    var dato = document.getElementById("pais").value;
    localStorage.setItem('pais', dato);
    return true;
}

window.onload = ()=>{
    document.getElementById('ultimoPais').innerText = localStorage.getItem('pais');
}
