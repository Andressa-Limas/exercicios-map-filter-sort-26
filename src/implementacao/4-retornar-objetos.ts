import { Alunas, turma } from "C:/Users/andre/exercicios-map-filter-sort-26/listaPreConstruida";


//4) Fazer uma função que retorne um array de objetos:
//[
//    { nome: "Ashley", media: 7.1, aprovada: true },
//    { nome: "Sabrina", media: 7.9, aprovada: true },
//    { nome: "Samantha", media: 5.0, aprovada: false }
//]        return lista;



function retornarObjetos(turma: Alunas) {
    return turma.map(aluna => {
        const { p1, p2, p3 } = aluna.prova;
        const media = (p1 + p2 + p3) / 3;
        return {
            nome: aluna.nome,
            media: parseFloat(media.toFixed(1)), // arredondando para 1 casa decimal
            aprovada: media >= 7
        };
    });

}
const resultado = retornarObjetos(turma);
console.log(resultado);
retornarObjetos(turma);