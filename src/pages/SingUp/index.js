import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from '../../services/api'

class SignUp extends Component {
    state = {
      username: "",
      name: "",
      password: "",
      error: ""
    };

    handleSignUp = async e => {
        e.preventDefault();
        const { username, name, password } = this.state;
        if (!username || !name || !password) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            try {
                await api.post("v1/user", { username, name, password });
                this.props.history.push("/");
            } catch (err) {
                 console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
            }
        }
    };

    render() {
        return (
            <main className="content">
                <form className="pure-form pure-form-aligned" onSubmit={this.handleSignUp}>
                    <fieldset>
                        {this.state.error && <span className="pure-form-message-inline add-category-error">{this.state.error}</span>}
                        
                        <div className="pure-control-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Nome"
                                onChange={e => this.setState({ name: e.target.value })}
                            />
                        </div>
                        
                        <div className="pure-control-group">
                            <label htmlFor="username">Usuário</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Nome de usuário"
                                onChange={e => this.setState({ username: e.target.value })}
                            />
                        </div>

                        <div className="pure-control-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Senha"
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                        </div>

                        <hr />
                        
                        <div className="pure-controls">
                            <button type="submit">Cadastrar grátis</button>  
                        </div>
                    </fieldset>
                    <Link className="pure-button" to="/">Fazer login</Link>
                </form>
            </main>
        );
    }
}
    
export default withRouter(SignUp);