import React, { useEffect, useState } from 'react'

const Jeremy = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/api/data')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [])

    // const pessoas = [
    //     {nome: 'Guga', idade: 20},
    //     {nome: 'Bell', idade: 20},
    //     {nome: 'Day', idade:  30},
    //     {nome: 'Dinha', idade: 25}
    // ]
    // const nomeDasPessoas = pessoas.map(function(pessoa){
    //     return `${pessoa.nome} tem, exatamente ${pessoa.idade} anos de idade.`
    // })


    const individualItems = data?.map(item => {
        return `>>> ${item.title}`
    })

    console.log(individualItems)
    return (
        <>
            <h1>Hello!</h1>
            <br /><br />

            <h3>{individualItems} AAAA</h3>
        </>
    )
}

export default Jeremy