import axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAttendence, myAttendence, myEmployeeAttendence } from '../store/actions/attendenceAction';
import './switch.css';

function arrayObjectIndexOf(myArray, searchTerm, property) {
    for (let i = 0, len = myArray.length; i < len; i += 1) {
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
}

export default function BasicSwitch(props) {
    const { data, date, page, disabled, largest, index, selecttoday } = props;
    const [state, setState] = React.useState(true);
    const [leave, setleave] = React.useState('');

    const dispatch = useDispatch();

    React.useEffect(() => {
        /* eslint no-underscore-dangle: 0 */
        axios
            .get(`http://localhost:4000/api/v1/employee/attendance/mylist/${date?.getMonth() + 1}/${date?.getFullYear()}/${data?._id}`, {
                withCredentials: true
            })
            .then((res) => {
                console.log(res.data.employeesAttendance);
                if (disabled === false && res.data.employeesAttendance !== undefined && res.data.employeesAttendance.length > 0) {
                    if (
                        arrayObjectIndexOf(res.data.employeesAttendance[0].employeeAttendance, date?.getDate(), 'date') > -1 &&
                        arrayObjectIndexOf(res.data.employeesAttendance[0].employeeAttendance, true, 'attendance') > -1
                    ) {
                        setState(true);
                    }
                    if (
                        arrayObjectIndexOf(res.data.employeesAttendance[0].employeeAttendance, date?.getDate(), 'date') > -1 &&
                        arrayObjectIndexOf(res.data.employeesAttendance[0].employeeAttendance, false, 'attendance') > -1
                    ) {
                        setState(false);
                        setleave();
                    } else {
                        dispatch(
                            addAttendence({
                                UAN: data?.companyDetails?.UAN,
                                fullName: data?.personalDetails?.fullName,
                                mobileNo: data?.personalDetails?.mobileNo,
                                joiningDate: data?.companyDetails?.joiningDate,
                                designation: data?.companyDetails?.designation,
                                dailyWages: data?.companyDetails?.dailyWages,
                                employeeAttendance: { date: date?.getDate(), attendance: true },
                                attendanceMonth: date?.getMonth() + 1,
                                attendanceYear: date?.getFullYear(),
                                /* eslint no-underscore-dangle: 0 */
                                employee: data?._id
                            })
                        );
                    }
                } else if (disabled === false) {
                    dispatch(
                        addAttendence({
                            UAN: data?.companyDetails?.UAN,
                            fullName: data?.personalDetails?.fullName,
                            mobileNo: data?.personalDetails?.mobileNo,
                            joiningDate: data?.companyDetails?.joiningDate,
                            designation: data?.companyDetails?.designation,
                            dailyWages: data?.companyDetails?.dailyWages,
                            employeeAttendance: { date: date?.getDate(), attendance: true },
                            attendanceMonth: date?.getMonth() + 1,
                            attendanceYear: date?.getFullYear(),
                            /* eslint no-underscore-dangle: 0 */
                            employee: data?._id
                        })
                    );
                }
            });
    }, [date, page, disabled, selecttoday]);

    const x = true;
    const handleSwitchChange = (e) => {
        dispatch(
            addAttendence({
                UAN: data?.companyDetails?.UAN,
                fullName: data?.personalDetails?.fullName,
                mobileNo: data?.personalDetails?.mobileNo,
                joiningDate: data?.companyDetails?.joiningDate,
                designation: data?.companyDetails?.designation,
                dailyWages: data?.companyDetails?.dailyWages,
                employeeAttendance: { date: date?.getDate(), attendance: e.target.checked },
                attendanceMonth: date?.getMonth() + 1,
                attendanceYear: date?.getFullYear(),
                /* eslint no-underscore-dangle: 0 */
                employee: data?._id
            })
        );
        setState(e.target.checked);
    };

    const ChangeHandler = (e) => {
        dispatch(
            addAttendence({
                UAN: data?.companyDetails?.UAN,
                fullName: data?.personalDetails?.fullName,
                mobileNo: data?.personalDetails?.mobileNo,
                joiningDate: data?.companyDetails?.joiningDate,
                designation: data?.companyDetails?.designation,
                dailyWages: data?.companyDetails?.dailyWages,
                employeeAttendance: { date: date?.getDate(), attendance: state, leave: e.target.value },
                attendanceMonth: date?.getMonth() + 1,
                attendanceYear: date?.getFullYear(),
                /* eslint no-underscore-dangle: 0 */
                employee: data?._id
            })
        );
        setleave(e.target.value);
    };
    console.log(leave);

    return (
        <span>
            {state === false && (
                <select style={{ padding: '10px 20px', marginRight: '10px', marginBottom: '10px' }} onBlur={ChangeHandler}>
                    <option value="">Choose Leave</option>
                    <option value="Paid Leave">Paid Leave</option>
                    <option value="Casual Leave">Casual Leave</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Paid Holiday">Paid Holiday</option>
                    <option value="Paid Weekly Off">Paid Weekly Off</option>
                    <option value="Unpaid Weekly Off">Unpaid Weekly Off</option>
                    <option value="Leave with Permission">Leave with Permission</option>
                    <option value="Leave without Permission">Leave without Permission</option>
                </select>
            )}
            <label className="switch" htmlFor={`x${index}`}>
                <input type="checkbox" checked={state} onChange={handleSwitchChange} disabled={disabled} id={`x${index}`} />
                <span className="slider round" />
            </label>
        </span>
    );
}
