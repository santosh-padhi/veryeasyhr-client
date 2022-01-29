import { combineReducers } from 'redux';

// customizationStore import
import customizationReducer from './reducer/customizationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const customizationStore = combineReducers({
    customization: customizationReducer
});

export default customizationStore;
