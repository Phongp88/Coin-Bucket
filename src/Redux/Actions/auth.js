import firebaseApp from "../../Firebase/config";

/////////////////////
///// FIREBASE /////
///////////////////

// **  Listeners **
// Listeners are usually set on componentDidMount, they only need to be set once, and will
// automatically update with a action dispatch whenever there is a change in that data
// in firebase. For example, getMessages is initialized, and calls updateMessages whenever
// there is a change in data.

export const initAuthListener = () => dispatch => {
  firebaseApp.auth().onAuthStateChanged(user => {
    user
      ? dispatch({
          type: "LOGIN",
          payload: user
        })
      : dispatch({
          type: "LOGOUT"
        });
  });
};
