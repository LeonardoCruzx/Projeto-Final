paginas = [
    "aboutus",
    "articles",
    "contact",
    "index",
    "services"
]

function pegar_pagina_atual()
{
    var pagina_atual = ""
    paginas.forEach(elemento => {
        if (window.location.pathname.includes(elemento))
        {
            pagina_atual = elemento.toString();
        }
    });
    return pagina_atual
}

function setar_cor_botao_menu()
{
    var pagina = pegar_pagina_atual();
    var botao = document.getElementById(pagina);
    botao.style.backgroundColor = "var(--cor-principal-escura)";
    botao.style.color = "white"
}
