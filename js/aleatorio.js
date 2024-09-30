const nomes = ["Ken", "Ryo", "Akuma", "Cammi", "Chun-li", "Sophie"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
