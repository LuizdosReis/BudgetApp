import { 
    setTextFilter, 
    sortByDescription, 
    sortByType 
} from './filter'

test('should setup setTextFilter action object with provides values', () => {
    const text = 'Something in'
    const action = setTextFilter({ text: text })

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should setup setTextFilter action object with default values', () => {
    const action = setTextFilter()

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})


test('should setup sortByDescription action object', () => {
    const action = sortByDescription()

    expect(action).toEqual({
        type: 'SORT_BY_DESCRIPTION'
    })
})

test('should setup sortByType action object', () => {
    const action = sortByType()

    expect(action).toEqual({
        type: 'SORT_BY_TYPE'
    })
})