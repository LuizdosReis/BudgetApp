export const setTextFilter = ({text = ''} = {}) => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const sortByDescription = () => ({
    type: 'SORT_BY_DESCRIPTION'
})

export const sortByType = () => ({
    type: 'SORT_BY_TYPE',
})