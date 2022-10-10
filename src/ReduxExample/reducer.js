export const initialState={count: {count:0}};

export default function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {...state,count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        default:
            return {...state};
    }
}