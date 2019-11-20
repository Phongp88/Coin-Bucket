import firebaseApp from "../../Firebase/config";
import fire from "../../Firebase/config";

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
    if (user) {
      console.log("USER! - ", user);
      dispatch({
        type: "LOGIN",
        payload: user
      });
    } else {
      console.log("User does not exist");
      dispatch({
        type: "LOGOUT"
      });
    }
  });
};


export const login = (email, password) => dispatch => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res =>{
      console.log(res)
    })
    .catch(error => {
      dispatch({
        type: "LOGIN_FAIL"
      });
    });
};