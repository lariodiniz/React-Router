import React from 'react';
import { NavLink  } from 'react-router-dom'

export default class App extends React.Component {

    constructor(){
        super();

    }

    render() {
        return (
            <div>
                <nav className="navbar has-shadow">
                    <div className="navbar-brand">
                        <NavLink exact to="/" className="navbar-item is-tab" activeClassName="is-active">Home</NavLink >
                        <NavLink exact to="/cursos" className="navbar-item is-tab" activeClassName="is-active">Curso</NavLink >
                        <NavLink exact to="/sobre" className="navbar-item is-tab" activeClassName="is-active">Sobre</NavLink >
                    </div>
                </nav>

                <section className="section">
                    <div className="container">
                        {this.props.children}
                    </div>
                </section>
            </div>
        );
    }

}


