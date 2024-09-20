function grabarLogin(){
    let usuario = $("#txtIdCorreo").val();
    let clave   = $("#txtIdClave").val();
    $.ajax({
        method: "POST",
        url: "controlador.php",
        data: {
            usuario: usuario,
            clave: clave
        }
    });
}