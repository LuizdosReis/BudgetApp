import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: "Preencha usuário e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/login", { username, password });
        login(response.data);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <main className="content">
        <form className="pure-form pure-form-aligned" onSubmit={this.handleSignIn}>
          <fieldset>
            {this.state.error && <p>{this.state.error}</p>}
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
            <div className="pure-controls">
              <button className="pure-button" type="submit">Entrar</button>  
            </div>
            <hr />
          </fieldset>
          <Link className="pure-button" to="/signup">Criar conta grátis</Link>
        </form>
      </main>
    );
  }
}

export default withRouter(SignIn);