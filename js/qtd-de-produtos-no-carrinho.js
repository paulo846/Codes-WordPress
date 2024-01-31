// Certifique-se de que a página esteja completamente carregada antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona o elemento <span> com a classe 'sc_layouts_cart_items'
    var cartQuantitySpan = document.querySelector('.sc_layouts_cart_items');

    if (cartQuantitySpan) {
        // Obtém o texto dentro do elemento
        var cartQuantityText = cartQuantitySpan.textContent;

        // Extrai o número do texto
        var cartQuantity = parseInt(cartQuantityText);

        //resultado nos logs
        console.log('Quantidade total de produtos no carrinho: ' + cartQuantity);

    } else {
    
        //resultado nos logs
    
        console.log('Elemento não encontrado. Certifique-se de estar na página correta do WooCommerce.');
    
    }
});