export default expenses => expenses.map(({ amount }) => amount).reduce((a, b) => a + b, 0);
