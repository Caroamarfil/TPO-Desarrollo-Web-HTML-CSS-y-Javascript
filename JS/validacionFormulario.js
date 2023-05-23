
function validar() {
    var nombre = document.getElementById("nameField").value.trim();
    var apellido = document.getElementById("lastNameField").value.trim();
    var mail = document.getElementById("mail").value.trim();
    var contraseña = document.getElementById("pass").value.trim();
   
    
    if (nombre === "") {
        alert("Complete el campo Nombre")
        document.getElementById("box_nombre").classList.add("campo_incorrecto");
        return false
    }
    else if (apellido === "") {
        alert("Complete el campo Apellido")
        document.getElementById("box_apellido").classList.add("campo_incorrecto");
        return false
    }
    else if (mail === "") {
        alert("Complete el campo mail")
        document.getElementById("box_mail").classList.add("campo_incorrecto");
        return false
    }
    else if (contraseña === "") {
        alert("Complete el campo contraseña")
        document.getElementById("box_contraseña").classList.add("campo_incorrecto");
        return false
    }
    else if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(nombre)) {
        document.getElementById("box_nombre").classList.add("campo_incorrecto");
        document.getElementById("box_nombre").classList.remove("campo_correcto");
        alert("El campo Nombre solo debe contener letras");
        return false;
    }
    else if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(apellido)) {
        document.getElementById("box_apellido").classList.add("campo_incorrecto");
        alert("El campo Apellido solo debe contener letras");
        return false;
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(mail)) {
        document.getElementById("box_mail").classList.add("campo_incorrecto");
        alert("ingrese una dirección de mail válida");
        return false;
    }

   

}

