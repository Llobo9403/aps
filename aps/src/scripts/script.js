const tabs = document.querySelectorAll('.tab-btn'); //O javascript percore o documento e atribui à variável "tabs" os elementos de classe "tab-btn"

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab))); /*Uma função o tipo seta é declarada, declara que quando um botão de id 
que consta no array "tabs" for clickado, a função tabClicked será chamada*/

const tabClicked = (tab) => {

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');

} /*Função determina que quando um botão for clicado, o conteúdo com id diferente ao id do botão será retirado a classe show e a o conteúdo de id igual
terá a classe adicionada*/
