export const login =(state = false , action) => {
    switch(action.type){
        case"LOGIN":
        state = action.payload
// console.log(state , " reducer is ok")
        return state;
        default :
        return state;
    };
};

