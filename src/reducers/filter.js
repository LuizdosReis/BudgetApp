const filterReducerDefaultState = {
    text: '',
    sortBy: 'id'
}

export default (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DESCRIPTION':
            return {
                ...state,
                sortBy: 'description'
            }
        case 'SORT_BY_TYPE':
            return {
                ...state,
                sortBy: 'type'
            }
        default:
            return state;
    }
}
