import axios from 'axios';
import {
    MY_EMPLOYEE_FAIL,
    MY_EMPLOYEE_REQUEST,
    MY_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAIL,
    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    ADD_ROLES_FAIL,
    ADD_ROLES_REQUEST,
    ADD_ROLES_SUCCESS,
    ADD_ROLES_RESET,
    CLEAR_ERRORS
} from 'store/constant/employeeConstant';

axios.defaults.withCredentials = true;
// Add Employee
export const addEmployee = (userData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_EMPLOYEE_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };
        console.log(userData);
        const y = {
            personalDetails: {
                fullName: userData.fullName,
                fatherName: userData.fatherName,
                mobileNo: userData.mobileNo,
                gender: userData.gender,
                dob: userData.date,
                currentAddress: userData.currentAddress,
                permanentAddress: userData.permanentAddress
            },
            companyDetails: {
                UAN: userData.uanNumber,
                aadhaarNo: userData.aadhaarNumber,
                panNo: userData.panNumber,
                drivingLicense: userData.drivingLicenses,
                designation: userData.designation,
                joiningDate: userData.joiningDate,
                selectWages: userData.selectWages,
                sickLeave: userData.sickLeave,
                casualLeave: userData.casualLeave
            },
            salaryDetails: {
                dailyWages: userData.dailyWages,
                basicSalary: userData.basicSalary,
                hra: userData.hra,
                con: userData.con,
                medical: userData.medical,
                education: userData.education,
                canteen: userData.canteen,
                incomeTax: userData.incomeTax
            },
            bankDetails: {
                bankName: userData.bankName,
                ifscCode: userData.bankIfsc,
                accountNo: userData.accountNo,
                PFNominee: userData.pfNominee,
                gratuityNominee: userData.gratuityNominee,
                leaveNominee: userData.leaveNominee
            }
        };
        const { data } = await axios.post('/api/v1/employees/new', y, config);

        dispatch({
            type: ADD_EMPLOYEE_SUCCESS,
            payload: data.user
        });
        dispatch({ type: ADD_EMPLOYEE_REQUEST });
    } catch (error) {
        dispatch({
            type: ADD_EMPLOYEE_FAIL,
            payload: error
        });
    }
};

// Get currently logged in user employee list
export const myEmployee = (page) => async (dispatch) => {
    try {
        dispatch({ type: MY_EMPLOYEE_REQUEST });

        const { data } = await axios.get(`/api/v1/employees/mylist?page=${page}`, {
            withCredentials: true
        });
        console.log(data);
        dispatch({
            type: MY_EMPLOYEE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MY_EMPLOYEE_FAIL,
            payload: error.response
        });
    }
};
// Add Roles
export const addRoles = (userData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_ROLES_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };

        const { data } = await axios.post('/api/v1/admin/register', userData, config);
        dispatch({
            type: ADD_ROLES_SUCCESS,
            payload: data
        });
        dispatch({ type: ADD_ROLES_REQUEST });
    } catch (error) {
        dispatch({
            type: ADD_ROLES_FAIL,
            payload: error
        });
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};
