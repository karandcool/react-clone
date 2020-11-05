export const initialState ={
    basket:[],
    user:null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount,0);

function reducer(state, action){
    switch(action.type) {
        case 'ADD_TO_BASKET':
        //LOGIC TO ADD ITEM IN BASKET
            return{
                ...state,
                basket: [ ...state.basket, action.item ]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //removing item from basket

            let newBasket= [...state.basket]
            const index = state.basket.findIndex((basketItem) =>basketItem.id ===action.id);
            if(index >= 0){
                //item exists in basket, remove it...
                newBasket.splice(index,1);
            } else {
                console.warn(
                    'cant remove the id'
                );
            }
            return{
                ...state,
                basket:newBasket,
            };
            break;
        default:
            return state;

    }
};

export default reducer; 