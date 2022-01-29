import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import customizationReducer from './reducer/customizationReducer';
import { addRoleReducer, myEmployeeReducer } from './reducer/employeeReducer';
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './reducer/userReducer';
import addAttendenceReducer, {
    myAttendenceReducer,
    myEmployeeAttendenceOvertimeReducer,
    myEmployeeAttendenceReducer
} from './reducer/attendenceReducer';
// ==============================|| REDUX - MAIN STORE ||============================== //
const reducer = combineReducers({
    customization: customizationReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    myEmployee: myEmployeeReducer,
    addAttandance: addAttendenceReducer,
    getAttendence: myAttendenceReducer,
    getSingleEmployeeAttendence: myEmployeeAttendenceReducer,
    overtime: myEmployeeAttendenceOvertimeReducer,
    addRole: addRoleReducer
});
const initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
