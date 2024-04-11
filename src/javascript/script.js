function criarCard() {
    buscarValoresDoInput();
    exibirValores();
}

function exibirValores() {
let valores = buscarValoresDoInput();
document.getElementById('contratoSpan').innerHTML = valores.contrato;
document.getElementById('valorDoLanceSpan').innerHTML = valores.valorLance;
document.getElementById('NomeSpan').innerHTML = valores.nome;
document.getElementById('cpfSpan').innerHTML = valores.cpf;
document.getElementById('cepSpan').innerHTML = valores.cep;
document.getElementById('estadoSpan').innerHTML = valores.estado;
document.getElementById('cidadeSpan').innerHTML = valores.cidade;
document.getElementById('bairroSpan').innerHTML = valores.bairro;
document.getElementById('ruaOuAvenidaSpan').innerHTML = valores.ruaAvenida;
document.getElementById('numeroSpan').innerHTML = valores.numero;
}

function buscarValoresDoInput() {
return {
    contrato: document.getElementById('contrato').value,
    valorLance: document.getElementById('valorLance').value,
    nome: document.getElementById('nome').value,
    cpf: document.getElementById('cpf').value,
    cep: document.getElementById('cep').value,
    estado: document.getElementById('estado').value,
    cidade: document.getElementById('cidade').value,
    bairro: document.getElementById('bairro').value,
    ruaAvenida: document.getElementById('ruaAvenida').value,
    numero: document.getElementById('numero').value
};
}

document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

document.addEventListener('DOMContentLoaded', function () {
    // Obtém os elementos do DOM
    const cartasOption = document.getElementById('cartas-option');
    const clientesOption = document.getElementById('clientes-option');
    const formulario = document.getElementById('meuFormulario');
    const card = document.querySelector('.card');

    // Adiciona ouvintes de eventos às opções do menu
    cartasOption.addEventListener('click', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        formulario.classList.remove('esconder'); // Exibe o formulário
        card.classList.add('esconder'); // Esconde a div com a classe "card"
    });

    clientesOption.addEventListener('click', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        formulario.classList.add('esconder'); // Esconde o formulário
        card.classList.remove('esconder'); // Exibe a div com a classe "card"
    });
});

function criarCard() {
    // Esconde o formulário
    document.getElementById('meuFormulario').classList.add('esconder');
    
    // Exibe a div com a classe "card"
    document.querySelector('.card').classList.remove('esconder');

    // Executa a função para exibir os valores dos inputs
    exibirValores();
}

document.addEventListener('DOMContentLoaded', function () {
    // Obtém todos os itens da lista
    const sideItems = document.querySelectorAll('.side-item');

    // Adiciona um ouvinte de evento de clique a cada item da lista
    sideItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            // Previne o comportamento padrão do link
            event.preventDefault();

            // Remove a classe 'item-selecionado' de todos os itens da lista
            sideItems.forEach(function (item) {
                item.classList.remove('item-selecionado');
            });

            // Adiciona a classe 'item-selecionado' ao item clicado
            item.classList.add('item-selecionado');
        });
    });
});