const initState = {
  orders: [],
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { product, quantity } = action.payload;
      const check = state.products.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const Tprice = product.totalPrice;
        const Tquantities = state.totalQuantities + 1;

        return {
          ...state,
          products: [...state.products, product],
          totalPrice: state.totalPrice + Tprice,
          totalQuantities: Tquantities,
        };
      }

    default:
      return state;
  }
};
export default orderReducer;
