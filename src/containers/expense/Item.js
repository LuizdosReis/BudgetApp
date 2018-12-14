import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const Item = ({
  amount, description, createAt, id,
}) => (
  <tr>
    <td className="table__element">
      <Link to={`/expenses/edit/${id}`}>{description}</Link>
    </td>
    <td>{numeral(amount / 100).format('$0,0.00')}</td>
    <td>{moment(createAt).format('DD/MM/YYYY')}</td>
  </tr>
);

Item.propTypes = {
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  createAt: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;
