import React from 'react';

export default class Curso extends React.Component {

    constructor(){
        super();

    }

    render() {
        return (
            <h1>Nome do Curso: { this.props.match.params.nome}</h1>
        );
    }

}

