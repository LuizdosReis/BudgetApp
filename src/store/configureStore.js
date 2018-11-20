import { createStore, combineReducers } from 'redux';
import categoriesReducer from '../reducers/categories'
import filterReducer from '../reducers/filter';
import expenseReducer from '../reducers/expenses';
import expensesFilterReducer from '../reducers/expensesFilter'


export default () => {
    const store  = createStore(
        combineReducers({
            categories: categoriesReducer,
            filters: filterReducer,
            expenses: expenseReducer,
            expensesFilter: expensesFilterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}
