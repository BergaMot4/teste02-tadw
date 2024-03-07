function validar() {
    console.log("teste");


    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const categoria = document.getElementById("categoria");
    const titulo = document.getElementById("titulo");
    const descricao = document.getElementById("descricao");


    if (nome.value == "") {
        document.getElementById("nome").focus();
        alert("Não deixe o campo nome vazio.");
        return false;
    }

    if (email.value == "") {
        document.getElementById("email").focus();
        alert("Não deixe o campo e-mail vazio.");
        return false;
    }

    if (categoria.value == "") {
        document.getElementById("categoria").focus();
        alert("Não deixe o campo categoria vazio.");
        return false;
    }

    if (titulo.value == "") {
        document.getElementById("titulo").focus();
        alert("Não deixe o campo título vazio.");
        return false;
    }

    if (descricao.value == "") {
        document.getElementById("descricao").focus();
        alert("Não deixe o campo descrição vazio.");
        return false;
    }

    alert("Sucesso");    
}

