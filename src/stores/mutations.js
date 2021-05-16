export const updateTrade = (state, payload) => {
    state.Purchase += parseFloat(payload.Purchase);
    state.Sale += parseFloat(payload.Sale) ;
    state.Balance = parseFloat(state.Sale) - parseFloat(state.Purchase);
}

