export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  //console.log(action);
  //console.log("this is state" + state);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      // Logice for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket
      let newBasket = [...state.basket];
      //console.log("this is new basket" + newBasket);

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      console.log("this is index value" + index);
      if (index >= 0) {
        newBasket.splice(index, 1);
        //console.log(newBasket.splice(index, 0));
      } else {
        console.warn(
          `Can't remove product (id:${action.id}) as its not selected`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
