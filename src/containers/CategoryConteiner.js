import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import getVisibleCategories from '../selectors/categories';
import Header from '../pages/Header';
import List from '../pages/List';
import CategoryListFilter from './CategoryListFilter';

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  handleOpenModal = (category) => {
    this.setState(() => ({ modelIsOpen: true, category }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ modelIsOpen: false }));
  };

  render() {
    const title = 'Categorias';
    return (
      <div id="layout">
        <div>
          <main className="content">
            <div className="main__header">
              <CategoryListFilter />
              <Link to="/categories/new">
                <button className="pure-button pure-button-primary">Add Categoria</button>
              </Link>
            </div>
            <div>
              <List categories={this.props.categories} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: getVisibleCategories(state.categories, state.filters),
});

export default connect(mapStateToProps)(CategoryContainer);
