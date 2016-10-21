/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import messages from './modules/Message/MessageReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  messages,
  intl,
});
