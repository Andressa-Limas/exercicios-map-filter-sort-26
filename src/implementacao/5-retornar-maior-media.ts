import { turma } from "C:/Users/camil/Documents/exercicios-map-filter-sort-26/listaPreConstruida";

// Função que retorna o nome da aluna com a maior média
function retornarMaiorMedia() {
    // Usamos o método reduce para encontrar a aluna com a maior média
    const alunaComMaiorMedia = turma.reduce((alunaMaior, alunaAtual) => {
        // Extrai as notas de prova da aluna atual
        const { p1, p2, p3 } = alunaAtual.prova;
        // Calcula a média da aluna atual
        const mediaAtual = (p1 + p2 + p3) / 3;

        // Extrai as notas de prova da aluna com maior média até agora (alunaMaior)
        const { p1: p1Maior, p2: p2Maior, p3: p3Maior } = alunaMaior.prova;
        // Calcula a média da aluna com a maior média até o momento
        const mediaMaior = (p1Maior + p2Maior + p3Maior) / 3;

        // Se a média da aluna atual for maior que a média da alunaMaior, a aluna atual se torna a nova alunaMaior
        return mediaAtual > mediaMaior ? alunaAtual : alunaMaior;
    });

    // Exibe o nome da aluna com a maior média no console
    console.log(alunaComMaiorMedia.nome);
    
    // Retorna o nome da aluna com a maior média
    return alunaComMaiorMedia.nome;
}

// Chamamos a função para executá-la
retornarMaiorMedia();