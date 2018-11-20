export default (categories, {text, field, sortBy}) => {
    return categories
        .filter((category) => text === '' || category.description.toLowerCase().includes(text.toLowerCase()))
        .sort((a, b) => {
            return a[sortBy] < b[sortBy] ? -1 : 1
        });
}