export const role =(state = " " , action) => {
    switch(action.type){
        case"ROLE":
        // switch(action.payload){
        //     case "adminstrator" :
        //         return (state = " ادمین ");
        //         case " author " :
        //             return (state = " نویسنده");
        //             case "editor" : 
        //             return (state = " ویرایشگر") ;
        //             default :
        //             return state 
                
        // };
        state = action.payload
        console.log(state , "role is")
   return state
   default :
   return state
    };
};

