export const getTradeResult = (state) => {
    return {
        purchase: state.Purchase,
        sale: state.Sale,
        balance: state.Balance
    }
}