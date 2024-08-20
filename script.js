const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vocễ sabe oq são jogos eletronicos?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: [
                    "otimo!",
                    "Q legal!"
                    ]
            },
            {
                texto: "Não, eu moro numa caverna escura e triste",
                afirmacao: [
                    "O jogo eletrônico, videojogo ou videogame é aquele que usa a tecnologia de computador. Ele pode ser jogado em computadores pessoais (dentre eles tablets e telefones celulares), em máquinas de fliperama ou em consoles.",
                    "Que pena meu cria"
                    ]
            }           
            
        ]
    },
    {
        enunciado: "Você joga jogos eletronicos com frequência?",
        alternativas: [
            {
                texto:"Sim, adoro jogos",
                afirmacao: [
                    "jogos são muito legais!",
                    "jogos são muito bons só toma cuidado pra n viciar"
                    ]
            },
            {
                texto: "Não, n curto muito jogo",
                afirmacao: [
                    "então blz meu cria",
                    "q paia po"
                    ]
            }
        ]
    },
    {
        enunciado: "Você acha q jogos eletronicos deviam ser considerados esportes?",
        alternativas: [
            {
                texto:"Sim",
                afirmacao: [
                    "Poggers",
                    "Daora!"
                    ]
            },
            {
                texto:"Não",
                afirmacao: [
                    "então blz fi",
                    "Um missil está em direção a vc, se esconda ou corra, ele chegara em 2 minutos"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
}
mostraPergunta();
