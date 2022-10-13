const pythonButtonTitle = 'Python';
const pythonButtonText = 'Comecei a aprender logica de programação com python e consegui me aprofundar bem nela, ela sempre esteve comigo durante meu aprendizado, em momentos em que tenho que fazer a implementação de conteudos teoricos, ela é a minha primeira escolha.';
const cButtonTitle = 'C e C++';
const cButtonText = 'Aprender C e C++ foi o que me fez me apaixonar por algoritmos e estrutura de dados, enquanto em python tudo era mais facil, aqui eu tinha que realmente entender o funcionamento da linguagem, dessa forma cristalizando meus conhecimentos.'
const htmlButtonTitle = 'HTML e CSS'
const htmlButtonText = 'Aprender HTML e CSS foi uma experiencia única, eu nunca imaginei que seria tão satisfatório. Sempre fui deixando o lado Front-End de lado enquanto eu aprendia sobre outros assunto, até o dia que decidi começar esse site, até então meu conhecimento em HTML e CSS se resumia em saber a estrutura básica dessas linguagens, consequentemente tive o tempo necessário para me aprofundar mesmo que um pouco nessas duas ferramentas, e depois de algum tempo estudando e testando diversos estilos diferentes, consegui encontrar a harmonia entre os componentes da pagina.'
const scriptButtonTitle = 'JavaScript'
const scriptButtonText = 'Minha experiencia com JavaScript foi bem semelhante com a que eu tive com o html, sempre tinha deixado de lado enquanto aprendia outras coisas, e conhecia apenas o basico, no entanto não me aprofundei o suficiente ainda, aprendi apenas o necessario pra utilizar nesse site. JavaScript é meu principal foco de aprendizado no momento'
const geralButtonTitle = 'Conhecimento Geral'
const geralButtonText = 'Conhecimentos gerais de todo estudando de engenharia de software: Algoritmos e estrutura de dados, solidos conhecimentos de forma geral, grafos, programação dinamica, etc. Familiaridade com assuntos como clean code. Banco da dados, familiaridade com banco de dados relacionais. Rede de computadores, conhecimento da teoria de forma geral. Inglês avançado.'


var h1 = document.querySelector('#habilidades-title');
var p = document.querySelector('#habilidades-text');
var pythonButton = document.querySelector('#python-button')
var cButton = document.querySelector('#c-button')
var htmlButton = document.querySelector('#html-button')
var scriptButton = document.querySelector('#javascript-button')
var geralButton = document.querySelector('#geral-button')


var div = document.querySelector('#id-right-section2-items');

pythonButton.addEventListener('mouseenter', function(){
    h1.textContent = pythonButtonTitle;
    p.textContent = pythonButtonText;
    div.style.display = 'flex'
})

pythonButton.addEventListener('mouseleave', function(){
    div.style.display = 'none'
})

cButton.addEventListener('mouseenter', function(){
    h1.textContent = cButtonTitle;
    p.textContent = cButtonText;
    div.style.display = 'flex'
})

cButton.addEventListener('mouseleave', function(){
    div.style.display = 'none'
})

htmlButton.addEventListener('mouseenter', function(){
    h1.textContent = htmlButtonTitle;
    p.textContent = htmlButtonText;
    div.style.display = 'flex'
})

htmlButton.addEventListener('mouseleave', function(){
    div.style.display = 'none'
})

scriptButton.addEventListener('mouseenter', function(){
    h1.textContent = scriptButtonTitle;
    p.textContent = scriptButtonText;
    div.style.display = 'flex'
})

scriptButton.addEventListener('mouseleave', function(){
    div.style.display = 'none'
})

geralButton.addEventListener('mouseenter', function(){
    h1.textContent = geralButtonTitle;
    p.textContent = geralButtonText;
    div.style.display = 'flex'
})

geralButton.addEventListener('mouseleave', function(){
    div.style.display = 'none'
})



