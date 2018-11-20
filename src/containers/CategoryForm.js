import React from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../actions/categories';

import Header from '../pages/Header';

class CategoryForm extends React.Component {
  state = {
    error: undefined,
    description: '',
    type: '',
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { description, type } = this.state;

    this.props.dispatch(addCategory({ description, type }));

    this.setState(() => ({
      description: '',
      type: '',
    }));
  };

  render() {
    const title = 'Categorias';
    return (
      <div id="layout">
        <Header title={title} />
        <main className="content">
          <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit}>
            <fieldset>
              <div className="pure-control-group">
                <label htmlFor="description">Descrição</label>
                <input
                  name="description"
                  type="text"
                  autoFocus
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
                {this.state.error && (
                  <span className="pure-form-message-inline add-category-error">
                    {this.state.error}
                  </span>
                )}
              </div>
              <div className="pure-control-group">
                <label htmlFor="type">Tipo</label>
                <select name="type" value={this.state.type} onChange={this.handleInputChange}>
                  <option value="">Selecione</option>
                  <option value="OUT">Saida</option>
                  <option value="IN">Entrada</option>
                </select>
              </div>

              <div className="pure-controls">
                <button className="pure-button button-success">Salvar</button>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
    );
  }
}

export default connect()(CategoryForm);
