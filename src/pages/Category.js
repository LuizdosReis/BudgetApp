import React from 'react'
import { connect } from 'react-redux'
import { removeCategory } from  '../actions/categories';

const Category = ({dispatch, description, type, id}) => (
    <tr>
        <td className="table__element">{description}</td>
        <td className="table__element">{type}</td>
        <td>
            <button 
                onClick={(e) => {
                    dispatch(removeCategory({id}))
                }}
            >
                Remover
            </button>
        </td>
    </tr>
)

export default connect()(Category);