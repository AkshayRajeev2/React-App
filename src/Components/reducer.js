export const initialState = {
    basket : [],
}


export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state = { basket:[] }, action) => {

    switch ( action.type ) {
        case 'ADD_TO_BASKET' :
            return {
                ...state,                
                basket : [ ...state.basket, action.item]
            }
        case  'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index= state.basket.findIndex((basketItem) => basketItem.id === action.item.id);
               if (index >= 0) {
                   //item exist in basket , remove it
             newBasket.splice(index, 1);
               } else {
                   console.warn (
                       'cant remove product (id: ${action.id}) as its not in basket' 
                   );
                   console.log(action.item.id)
               }
               return {...state, basket: newBasket,};
    
            
        default:
            return state
    }
}

export default reducer

