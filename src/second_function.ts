function Saudacao(nome: string): string {
    return `Olá, ${nome}!` 
}

const SaudacaoCompleta = Saudacao('Ana')
console.log(SaudacaoCompleta)

/* OUTRO MOOD DE FAZER:

const Saudacao = (nome: string): string => `Olá, ${nome}!`

console.log(Saudacao('Ana'))

*/