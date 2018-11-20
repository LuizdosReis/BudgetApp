import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const List = ({ categories, handleOpenModal }) => (
  <div>
    <table className="pure-table table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tipo</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(category => (
          <Category key={category.id} {...category} handleOpenModal={handleOpenModal} />
        ))}
      </tbody>
    </table>
  </div>
);

List.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default List;
