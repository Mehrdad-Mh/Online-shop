export const load =(state = false , action) => {
    switch(action.type){
        case"LOADER":
        state = action.payload
// console.log(state , " reducer is ok")
        return state;
        default :
        return state;
    };
};

