import uuid from 'uuid';

export const addCategory = ({ description = '' , type = '' } = {}) => ({
    type: 'ADD_CATEGORY',
    category: {
        id: uuid(),
        description,
        type
    }
})

export const removeCategory = ({ id } = {}) => ({
    type: 'REMOVE_CATEGORY',
    id: id
})

export const editCategory = (id, updates) => ({
    type: 'EDIT_CATEGORY',
    id,
    updates
})