import { turma } from "C:/Users/andre/exercicios-map-filter-sort-26/listaPreConstruida";
// Função que retorna o nome da aluna com a Menor média
function retornarMenorMedia() {
    // Usamos o método reduce para encontrar a aluna com a menor média
    const alunaComMenorMedia = turma.reduce((alunaMenor, alunaAtual) => {
        // Extrai as notas de prova da aluna atual
        const { p1, p2, p3 } = alunaAtual.prova;
        // Calcula a média da aluna atual
        const mediaAtual = (p1 + p2 + p3) / 3;

        // Extrai as notas de prova da aluna com maior média até agora (alunaMaior)
        const { p1: p1Maior, p2: p2Maior, p3: p3Maior } = alunaMenor.prova;
        // Calcula a média da aluna com a Menor média até o momento
        const mediaMaior = (p1Maior + p2Maior + p3Maior) / 3;

        // Se a média da aluna atual for maior que a média da alunaMaior, a aluna atual se torna a nova alunaMaior
        return mediaAtual < mediaMaior ? alunaAtual : alunaMenor;
    });

    // Exibe o nome da aluna com a Menor média no console
    console.log(alunaComMenorMedia.nome);
    
    // Retorna o nome da aluna com a Menor média
    return alunaComMenorMedia.nome;
}

// Chamamos a função para executá-la
retornarMenorMedia();
