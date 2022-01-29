import {
    ADD_ATTENDENCE_FAIL,
    ADD_ATTENDENCE_REQUEST,
    ADD_ATTENDENCE_SUCCESS,
    GET_ATTENDENCE_FAIL,
    GET_ATTENDENCE_REQUEST,
    GET_ATTENDENCE_SUCCESS,
    GET_SINGLE_ATTENDENCE_FAIL,
    GET_SINGLE_ATTENDENCE_REQUEST,
    GET_SINGLE_ATTENDENCE_SUCCESS,
    OVERTIME_ATTENDENCE_FAIL,
    OVERTIME_ATTENDENCE_REQUEST,
    OVERTIME_ATTENDENCE_SUCCESS
} from 'store/constant/attendenceConstant';
import { CLEAR_ERRORS } from 'store/constant/userConstant';

const addAttendenceReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ATTENDENCE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case ADD_ATTENDENCE_SUCCESS:
            return {
                ...state,
                loading: false,
                employee: action.payload
            };

        case ADD_ATTENDENCE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

export const myAttendenceReducer = (state = { attend: {} }, action) => {
    switch (action.type) {
        case GET_ATTENDENCE_REQUEST:
            return {
                loading: true
            };
        case GET_ATTENDENCE_SUCCESS:
            return {
                loading: false,
                attend: action.payload
            };
        case GET_ATTENDENCE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
};

export const myEmployeeAttendenceReducer = (state = { attend: [], isyes: null }, action) => {
    switch (action.type) {
        case GET_SINGLE_ATTENDENCE_REQUEST:
            return {
                loading: true,
                isyes: null
            };
        case GET_SINGLE_ATTENDENCE_SUCCESS:
            return {
                loading: false,
                attend: action.payload,
                isyes: true
            };
        case GET_SINGLE_ATTENDENCE_FAIL:
            return {
                loading: false,
                error: action.payload,
                isyes: false
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
};

export const myEmployeeAttendenceOvertimeReducer = (state = { overtime: [] }, action) => {
    switch (action.type) {
        case OVERTIME_ATTENDENCE_REQUEST:
            return {
                loading: true
            };
        case OVERTIME_ATTENDENCE_SUCCESS:
            return {
                loading: false,
                overtime: action.payload
            };
        case OVERTIME_ATTENDENCE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
};

export default addAttendenceReducer;
