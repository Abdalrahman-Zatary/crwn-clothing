import { createContext, useEffect, useReducer } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
  console.log('dispatched');
  console.log(action);
  const { type, payload } = action;
  
  switch(type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER :
      return {
        ...state,
        currentUser: payload
      }
      default: 
      throw new Error(`Unhandled ${type} in userReducer`);
    };
  };

const INITAIL_STATE = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITAIL_STATE);
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch({
      type: USER_ACTION_TYPE.SET_CURRENT_USER, 
      payload: user,
    });
  };

  const value = { currentUser, setCurrentUser};

  useEffect(() => {
    const unsubcribe =  onAuthStateChangedListener((user) => {
      setCurrentUser(user);
      if (user) {
        createUserDocumentFromAuth(user);
      };
    });

    return unsubcribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}