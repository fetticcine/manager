import { EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  user: null,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      //For redux to handle updating state properly, we return a new object,
      // copy everything from the original state object and update the key
      // we're interested in with action.payload and override it in the state object
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication failed' };
    default:
      return state;
  }
};

// This is a standard boilerplate for setting up a reducer
// It will be a function that takes 2 arguments (action, state)
// The function switches over the action type it receives when called elsewhere
// in the program and executes accordingly
// There always needs to be a default case which simply returns the current state
// Redux cannot return a state of undefined so we can initialize state as 'null'
// or define a variable (e.g., initialState) and set it equal to that
