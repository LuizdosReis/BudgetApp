import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { Link } from 'react-router-dom';

const Item = ({
  amount, description, category, createAt, id,
}) => (
  <tr>
    <td className="table__element">
      <Link to={`/expenses/edit/${id}`}>{description}</Link>
    </td>
    <td>{`R$ ${amount}`}</td>
    <td>{category}</td>
    <td>{moment(createAt).format('DD/MM/YYYY')}</td>
  </tr>
);

Item.propTypes = {
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createAt: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Item;
