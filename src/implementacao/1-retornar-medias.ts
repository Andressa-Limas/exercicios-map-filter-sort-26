//  as notas devem ter apenas 1 numero após a virgula
// para estar aprovada a aluna tem que ter media igual ou acima de 7
// Para esse exercicio voces não poderão usar o for, while ou do while
// Formula da média: (a + b + c) / 3
// o arquivo "listaPreConstruida.ts"contem o um array pronto para ser utilizado durante os exercicios,
//  lembrem-se de importar o array e tipo para cada arquivo de exercicio.

// 1) Fazer uma função que retorne um array de todas as médias

import { turma } from "C:/Users/andre/exercicios-map-filter-sort-26/listaPreConstruida";

function retornarMedias() {
    // Cria um array para armazenar as médias
    const medias = turma.map(aluna => {
        const { p1, p2, p3 } = aluna.prova; // Extrai as notas de prova
        const media = (p1 + p2 + p3) / 3; // Calcula a média
        return Number(media.toFixed(1)); // Formata a média para 1 casa decimal
    });

    console.log(medias); // Exibe as médias
    return medias; // Retorna as médias
}

retornarMedias();

