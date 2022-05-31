const reducer =(state,action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart: [...state.cart,{...action.payload,qty:1}]
            }
        case 'REMOVE':
            return{
                ...state,
                cart: state.cart.filter((x) => x.id !== action.payload.id)
            }
    }
    return state
}

export default reducer