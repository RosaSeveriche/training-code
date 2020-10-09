let demo = document.getElementById("root");

document.addEventListener("DOMContentLoaded", submitForm, true);
function submitForm(){

    document.addEventListener("submit",  e => {
        e.preventDefault();
        var nombre = validateNombre();
        if(!nombre) return false;
        var apellido = validateApellido();
        if(!apellido) return false;
        var dni = validateDNI();
        if(!dni) return false;
        var direccion = validateDireccion();
        if(!direccion) return false;
        alert("procesar datos");
    });
    console.log("finish");
}

function validateNombre()
{
    let nombre = document.getElementById("nombre");
    console.log('Nombre ingresado'+nombre.value)
    if(nombre.value == '') {
        alert("El nombre es requerido");
        nombre.focus();
        return false;
    } else if(nombre.value == 'rosa'){
        alert( "Que nombre tan lindo, no soportamos tanta belleza, pon otro")
        nombre.focus()
        return false
    }
    else{
        return true
    }
}

function validateApellido()
{
    let apellido = document.getElementById("apellido");
    console.log('apellido ingresado'+apellido.value)
    if(apellido.value == '') {
        alert("El apellido es requerido");
        apellido.focus();
        return false;
    } else if(apellido.value == 'severiche'){
        alert("primer apellido");
        apellido.focus()
        return false;
    } else{
        return true;
    }
}

function validateDNI()
{
    let dni = document.getElementById("dni");
    console.log('dni ingresado'+dni.value)
    if(dni.value == '') {
        alert("El dni es requerido");
        dni.focus();
        return false;
    }else{
        return true
    }
}

function validateDireccion()
{
    let direccion = document.getElementById("direccion");
    console.log('direccion ingresado'+direccion.value)
    if(direccion.value == '') {
        alert("El direccion es requerido");
        direccion.focus();
        return false;
    }else{
        return true
    }
}