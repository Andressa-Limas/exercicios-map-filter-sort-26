import { turma } from "C:/Users/camil/Documents/exercicios-map-filter-sort-26/listaPreConstruida";

// 2) Fazer uma função que retorne um array de nomes das aprovadas
// para estar aprovada a aluna tem que ter media igual ou acima de 7
function retornarAprovadas() {
    const aprovadas = turma.filter(aluna => {
        const { p1, p2, p3 } = aluna.prova; // Extrai as notas de prova
        const media = (p1 + p2 + p3) / 3; // Calcula a média
        return media >= 7; // Retorna true se a média for 7 ou mais
    }).map(aluna => aluna.nome); // Mapeia para obter apenas os nomes das aprovadas

    console.log(aprovadas); // Exibe os nomes das aprovadas
    return aprovadas; // Retorna os nomes das aprovadas
}

retornarAprovadas();
