export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((acc, item) => {
        return acc + item.price;
    }, 0)
}


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        
        
        case "REMOVE_FROM_BASKET":

            let newBasket = state.basket;
            const index = newBasket.findIndex((item) => {
                console.log(item.id);
                console.log(action.id.id);
                return item.id === action.id.id;
            })
            console.log("Index>>>>", index);
            if (index >= 0) {
                newBasket.splice(index, 1);
                
            } else {
                console.log(`Item with id ${action.id} is not added in the cart.`)
            }
            return {
                ...state,
                basket: newBasket,
            };
        
        case "login": {
            return {
                ...state,
                user: action.user,
            }
        }
            
        case "logout": {
            return {
                ...state,
                user: null,
            }
        }
        
        default:
            return state;
        
        
        
        
    }

}


export default reducer;