import { AnyAction } from 'redux-saga';

import { signInFailed, signUpFailed, signOutFailed, signInSuccess, signOutSuccess } from './user.action';

import { UserDate } from '../../utils/firebase/firebase.utils';

export type UserState = {
  readonly currentUser: UserDate | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

const USER_INITAIL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITAIL_STATE, action: AnyAction) => {

  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};

