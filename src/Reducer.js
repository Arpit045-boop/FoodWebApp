export const initialState = {
    Mybasket: []
}

export const getMyBasketTotal = (Mybasket) =>
    Mybasket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                Mybasket: [...state.Mybasket, action.item]
            }

        default:
            return state;
    }
}
export default reducer;