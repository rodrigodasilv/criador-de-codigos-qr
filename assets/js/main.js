document.getElementById("send").addEventListener("click", makeCode);

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 100,
        height : 100
    });
    
    function makeCode () {		
        var texto = document.getElementById("texto");
        
        if (!texto.value) {
            M.toast({html: 'Preencha o campo!'})
            texto.focus();
            return;
        }
        
        qrcode.makeCode(texto.value);

        var element = document.getElementById("qrcode");
        element.classList.remove("hide");
    }