import { createStore, combineReducers } from 'redux';

// UI reducer for menu state
const initialUIState = {
  isMobileMenuOpen: false,
};

function uiReducer(state = initialUIState, action) {
  switch (action.type) {
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
    case 'CLOSE_MOBILE_MENU':
      return { ...state, isMobileMenuOpen: false };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  ui: uiReducer,
});

const store = createStore(rootReducer);

export default store; 