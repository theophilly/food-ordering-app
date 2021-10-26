const initState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const cartReducer = (state = initState, action) => {
  let findPro;
  let index;
  switch (action.type) {
    case 'ADD_TO_CART':
      const { product, quantity } = action.payload;
      const check = state.products.find((pr) => pr._id === product._id);
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
    case 'INC': {
      let Tprice;
      findPro = state.products.find(
        (product) => product._id === action.payload
      );
      index = state.products.findIndex(
        (product) => product._id === action.payload
      );
      findPro.quantity += 1;
      state.products[index] = findPro;
      Tprice = state.totalPrice + findPro.value * findPro.quantity;
      return {
        ...state,
        totalPrice: Tprice,
        //  totalQuantities: state.totalQuantities + 1,
      };
    }
    case 'DEC': {
      let Tprice;
      findPro = state.products.find(
        (product) => product._id === action.payload
      );
      index = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.products[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice - findPro.discountPrice,
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        return state;
      }
    }
    case 'REMOVE': {
      findPro = state.products.find(
        (product) => product._id === action.payload
      );
      const filtered = state.products.filter(
        (product) => product._id !== action.payload
      );
      return {
        ...state,
        products: filtered,
        totalPrice: state.totalPrice - findPro.totalPrice,
        totalQuantities: state.totalQuantities - 1,
      };
    }
    case 'INC_SINGLE': {
      let Tprice;
      let Tquantities;
      index = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      findPro = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (action.payload.increment === true) {
        if (findPro.quantity != 5) {
          findPro = {
            ...findPro,
            quantity: findPro.quantity + 1,
            totalPrice: findPro.totalPrice + findPro.price,
          };
          state.products[index] = findPro;
          Tprice = state.totalPrice + findPro.price;

          return {
            ...state,
            products: [...state.products],
            totalPrice: Tprice,
          };
        }
      } else {
        if (findPro.quantity > 1) {
          findPro = {
            ...findPro,
            quantity: findPro.quantity - 1,
            totalPrice: findPro.totalPrice - findPro.price,
          };
          state.products[index] = findPro;
          Tprice = state.totalPrice - findPro.price;

          return {
            ...state,
            products: [...state.products],
            totalPrice: Tprice,
          };
        }
      }
      return state;
    }
    case 'EMPTY_CART': {
      return { ...initState, totalPrice: 0, totalQuantities: 0 };
    }
    default:
      return state;
  }
};
export default cartReducer;
