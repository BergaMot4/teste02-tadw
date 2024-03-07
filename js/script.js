function validar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = document.getElementById("data").value;
    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;


    if (nome == "") {
        document.getElementById("nome").focus();
        document.getElementById("avisos").innerHTML = "Campo nome não pode ficar em branco!";
        return false;
    }

    if (email == "") {
        document.getElementById("email").focus();
        document.getElementById("avisos").innerHTML = "Campo e-mail não pode ficar em branco!";
        return false;
    }

    if (data == "") {
        document.getElementById("data").focus();
        document.getElementById("avisos").innerHTML = "Campo data não pode ficar em branco!";
        return false;
    }

    if (titulo == "") {
        document.getElementById("titulo").focus();
        document.getElementById("avisos").innerHTML = "Campo título não pode ficar em branco!";
        return false;
    }

    if (descricao == "") {
        document.getElementById("descricao").focus();
        document.getElementById("avisos").innerHTML = "Campo descrição não pode ficar em branco!";
        return false;
    }
    
alert("enviou os dados");
}
