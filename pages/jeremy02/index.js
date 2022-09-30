import React from 'react'

const Jeremy02 = () => {

    const pessoas = [
        { nome: 'Guga', idade: 20 },
        { nome: 'Bell', idade: 20 },
        { nome: 'Day', idade: 30 },
        { nome: 'Dinha', idade: 25 }
    ]
    const nomeDasPessoas = pessoas.map(function (pessoa) {
        return `${pessoa.nome} tem, exatamente ${pessoa.idade} anos de idade.`
    })

    return (
        <div>
            {nomeDasPessoas}
        </div>
    )
}

export default Jeremy02