import { turma } from "C:/Users/andre/exercicios-map-filter-sort-26/listaPreConstruida";
// Função que retorna a média total da turma
function retornarMediaTurma() {
    let somaMedias = 0;
    
    // Soma as médias individuais da turma
    turma.forEach(aluna => {
        const { p1, p2, p3 } = aluna.prova; // Extrai as notas de prova
        const media = (p1 + p2 + p3) / 3; // Calcula a média individual
        somaMedias += media; // Acumula a média na soma total
    });

    // Calcula a média total da turma
    const mediaTotalTurma = Number((somaMedias / turma.length).toFixed(1));

    console.log("Média total da turma:", mediaTotalTurma); // Exibe apenas a média total da turma
    
    return mediaTotalTurma; // Retorna a média total da turma
}

retornarMediaTurma();
