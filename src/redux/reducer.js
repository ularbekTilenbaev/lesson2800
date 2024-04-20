const istalState={
  world: {}
}

export const Reducer = (state = istalState, action)=>{
  switch(action.type){
    case 'ADD_WORLD':
      
      return {...state,world: action.payload}
    default:
      return state;
  } 
} 