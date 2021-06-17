const initialstate=null
const notificationReducer=(state=initialstate,action) =>{
    switch(action.type){
        case 'SHOW_NOTIFICATION':return action.notification
        case 'HIDE_NOTIFICATION':return action.notification
        default:return state
    }
}


export const setNotification = (notification) => {
      return dispatch=>{
        dispatch({type: 'SHOW_NOTIFICATION',
        notification,
      })}
     
    }
    export const hideNotification=()=>{
      return dispatch=>{
        dispatch({
        type: 'HIDE_NOTIFICATION',
        notification: null
      })}
    }
  

export default notificationReducer