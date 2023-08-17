// Menu mobile

const menuMobile = document.querySelector('#menu-mobile')
const iconMenu = document.querySelector('#icone-menu')
const closeMenu = document.querySelector('#icon-close')

iconMenu.addEventListener("click", function() {
    menuMobile.classList.remove('hide')
})

closeMenu.addEventListener("click", function() {
    menuMobile.classList.add('hide')
})

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

// Mostrar e esconder carrinho

const iconCarrinho = document.querySelector('#carrinho')
const caixaCarrinho = document.querySelector('#caixa-carrinho')

iconCarrinho.addEventListener("click", function() {
    caixaCarrinho.classList.toggle('hide')
})

// Calculo valor da compra

var valor = 0

function valorCompra() {
    valor = numQuantidade * 125
    return valor.toFixed(2).replace('.',',')
}

// Adicionar itens ao carrinho

const addCart = document.querySelector('#botao-add')
const cartVazio = document.querySelector('#carrinho-vazio')
const cartCheio = document.querySelector('#carrinho-cheio')
const quantProdCart = document.querySelector('#qntd-prod')
const valorTot = document.querySelector('#valor-tot')
const notCart = document.querySelector('#not-hide')
const qntdItensNot = document.querySelector('#qntd-itens')

addCart.addEventListener("click", function() {
    cartVazio.classList.add('hide')
    cartCheio.classList.remove('hide')
    quantProdCart.innerHTML = `${numQuantidade}`
    
    valorTot.innerHTML = `${valorCompra()}`

    notCart.classList.remove('hide')
    qntdItensNot.innerHTML = `${numQuantidade}`
})

// Remover itens do carrinho

const lixeira = document.querySelector('#lixeira')

lixeira.addEventListener("click", function() {
    cartVazio.classList.remove('hide')
    cartCheio.classList.add('hide')

    notCart.classList.add('hide')
})

