import React from 'react';
import '.Title.css'

interface ITitle{
    nome: string
}

function Title (props: any) {
    return(
        <h1>Hello {props.nome}!</h1>
    );

}

export { Title };