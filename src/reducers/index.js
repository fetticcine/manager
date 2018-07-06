import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer
});

// combineReducers function allows all of the
// reducers we'll ultimately create play nicely
// with one another
