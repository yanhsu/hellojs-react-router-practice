// action type
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DEL_TODO = "DEL_TODO";
// action creator
export  function addTodo(text){
  return{
    type: ADD_TODO,
    text:text
  }
}
export  function toggleTodo(index){
  return{
    type: TOGGLE_TODO,
    index
  }
}
export  function delTodo(index){
  return{
    type: DEL_TODO,
    index
  }
}
