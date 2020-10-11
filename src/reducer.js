export const initialState = {
    basket:[],
    user:null,
};

function reducer(state , action ,){
    console.log(action);
    switch(action.type){
        
        case 'ADD_TO_BASKET':
            //logic of adding item to basket
            return {
                ...state,
                basket: [...state.basket , action.item]
            };
            break;
        
        case 'REMOVE_FROM_BASKET':
            //Logic of remving from basket
            return {state}; 
            break;
        default:
            return state;


    }
}
export default reducer;