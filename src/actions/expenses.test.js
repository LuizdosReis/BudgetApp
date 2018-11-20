import { remove, edit, add  } from './expenses';

it('should setup remove expense action object', () => {
    const action = remove({ id: 1 });
expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 1
})
})

it('should setup edit expense action object', () => {
  const action = edit(1, { description: 'updated description'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 1,
        updates: {
            description: 'updated description'
        }
    })
})

it('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'description', 
        category: 1, 
        createAt: 123,
        amount: 32.50
    }
    
    const action = add(expenseData)
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

it('should setup add expense action object with default values', () => {
    const action = add()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            category: null,
            createAt: 0,
            amount: 0,
            id: expect.any(String)
        }
    })
})

