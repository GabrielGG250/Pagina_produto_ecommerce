// Mudar imagem principal

const thumbUm = document.querySelector("#thumbUm")
const thumbDois = document.querySelector("#thumbDois")
const thumbTres = document.querySelector("#thumbTres")
const thumbQuatro = document.querySelector("#thumbQuatro")

const imgPrincipal = document.querySelector("#img-produto")

thumbUm.addEventListener("click", function() {
    imgPrincipal.setAttribute("src", "images/image-product-1.jpg")
    thumbUm.classList.add("ativa")
    thumbDois.classList.remove("ativa")
    thumbTres.classList.remove("ativa")
    thumbQuatro.classList.remove("ativa")
})

thumbDois.addEventListener("click", function() {
    imgPrincipal.setAttribute("src", "images/image-product-2.jpg")
    thumbUm.classList.remove("ativa")
    thumbDois.classList.add("ativa")
    thumbTres.classList.remove("ativa")
    thumbQuatro.classList.remove("ativa")
})

thumbTres.addEventListener("click", function() {
    imgPrincipal.setAttribute("src", "images/image-product-3.jpg")
    thumbUm.classList.remove("ativa")
    thumbDois.classList.remove("ativa")
    thumbTres.classList.add("ativa")
    thumbQuatro.classList.remove("ativa")
})

thumbQuatro.addEventListener("click", function() {
    imgPrincipal.setAttribute("src", "images/image-product-4.jpg")
    thumbUm.classList.remove("ativa")
    thumbDois.classList.remove("ativa")
    thumbTres.classList.remove("ativa")
    thumbQuatro.classList.add("ativa")
})

// Mudar quantidade de produtos

const adicionar = document.querySelector("#mais")
const diminuir = document.querySelector("#menos")
const quantidade = document.querySelector("#quantidade")
var valorInicial = 1
var numQuantidade = valorInicial

adicionar.addEventListener("click", function() {
    numQuantidade = numQuantidade + 1
    quantidade.innerHTML = numQuantidade
})

diminuir.addEventListener("click", function() {
    if (numQuantidade > 1) {
        numQuantidade = numQuantidade - 1
        quantidade.innerHTML = numQuantidade
    }
})