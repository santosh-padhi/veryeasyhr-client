import axios from 'axios';
import Cookies from 'universal-cookie';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
} from '../constant/userConstant';

axios.defaults.withCredentials = true;
// Login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };
        const { data } = await axios.post('https://veryeasyhr.herokuapp.com/api/v1/login', { email, password }, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error
        });
    }
};

// Register user
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                withCredentials: true
            }
        };

        const { data } = await axios.post('https://veryeasyhr.herokuapp.com/api/v1/admin/register', userData, config);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response
        });
    }
};

// Load user
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get('https://veryeasyhr.herokuapp.com/api/v1/currentUser', { withCredentials: true });

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        });
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response
        });
    }
};

// Update profile
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                withCredentials: true
            }
        };

        const { data } = await axios.put('https://veryeasyhr.herokuapp.com/api/v1/user_profile/edit_profile', userData, config);

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.success
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response
        });
    }
};

// Update password
export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };

        const { data } = await axios.put('https://veryeasyhr.herokuapp.com/api/v1/password/update_password', passwords, config);

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data.success
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response
        });
    }
};

// Forgot password
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };

        const { data } = await axios.post('https://veryeasyhr.herokuapp.com/api/v1/password/forgot', email, config);

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.message
        });
    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response
        });
    }
};

// Reset password
export const resetPassword = (token, passwords) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PASSWORD_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };

        const { data } = await axios.put(`https://veryeasyhr.herokuapp.com/api/v1/password/reset/${token}`, passwords, config);

        dispatch({
            type: NEW_PASSWORD_SUCCESS,
            payload: data.success
        });
    } catch (error) {
        dispatch({
            type: NEW_PASSWORD_FAIL,
            payload: error.response
        });
    }
};

// Logout user
export const logout = () => async (dispatch) => {
    try {
        await axios.get('https://veryeasyhr.herokuapp.com/api/v1/logout', { withCredentials: true });

        dispatch({
            type: LOGOUT_SUCCESS
        });
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response
        });
    }
};

// Get all users
export const allUsers = (page, sort, limit) => async (dispatch) => {
    try {
        dispatch({ type: ALL_USERS_REQUEST });

        const { data } = await axios.get(
            `https://veryeasyhr.herokuapp.com/api/v1/admin/all_users?page=${page}&sorted=${sort}&limit=${limit}`,
            {
                withCredentials: true
            }
        );
        console.log(data);
        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response
        });
    }
};

// Update user - ADMIN
export const updateUser = (id, userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_USER_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };

        const { data } = await axios.put(`https://veryeasyhr.herokuapp.com/api/v1/admin/user/${id}`, userData, config);

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data.success
        });
    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response
        });
    }
};

// Delete user - ADMIN
export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_USER_REQUEST });

        const { data } = await axios.delete(`https://veryeasyhr.herokuapp.com/api/v1/admin/user/${id}`, { withCredentials: true });

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data.success
        });
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response
        });
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};
