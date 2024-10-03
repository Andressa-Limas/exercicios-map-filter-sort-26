import { turma } from "C:/Users/andre/exercicios-map-filter-sort-26/listaPreConstruida";
//3) Fazer uma função que retorne um array de nome das reprovadas
// para estar reprovada a aluna tem que ter uma nota menor que 7

function retornarReprovadas() {
    const reprovadas = turma.filter(aluna => {
        const { p1, p2, p3 } = aluna.prova; // Extrai as notas de prova
        const media = (p1 + p2 + p3) / 3; // Calcula a média
        return media < 7; // Retorna true se a média for menor que sete
    }).map(aluna => aluna.nome); // Mapeia para obter apenas os nomes das reprovadas

    console.log(reprovadas); // Exibe os nomes das reprovadas
    return reprovadas; // Retorna os nomes das reprovadas
}

retornarReprovadas();
