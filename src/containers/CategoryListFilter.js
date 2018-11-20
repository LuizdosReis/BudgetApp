import React from 'react';
import { connect } from 'react-redux'
import { setTextFilter, sortByDescription, sortByType } from  '../actions/filter';


const CategoryListFilter = ({ dispatch, filters}) => (
    <div>
        <input type="text" 
            value={filters.text} 
            onChange={(e) => { 
                dispatch(setTextFilter({text: e.target.value})) 
            }}
        />
        <select 
            value={filters.sortBy}
            onChange={(e) => { 
                e.target.value === 'description' ? dispatch(sortByDescription()) : dispatch(sortByType())  
            }}
        >
            <option value='description'>Descrição</option>
            <option value='type'>Tipo</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(CategoryListFilter);