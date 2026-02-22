import { Middleware } from 'redux';
import { RootState } from '../store';

export const loggerMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  if (typeof action === 'object' && action !== null && 'type' in action) {
    return next(action);
  }

  console.log("type: ", (action as any).type);
  console.log("payload: ", (action as any).payload);
  console.log("currentState: ", store.getState());

  const result = next(action);

  console.log("next state: ", store.getState());

  return result;
};