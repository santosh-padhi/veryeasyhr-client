import { AiFillPlusCircle } from 'react-icons/ai';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useDispatch } from 'react-redux';
import { myEmployeeAttendenceOvertime } from '../../store/actions/attendenceAction';

export default function OvertimeInput(props) {
    const { value, employee, date } = props;
    const dispatch = useDispatch();

    const [val, setval] = React.useState(value);
    const handleChange = (event) => {
        setval(event.target.value);
    };

    return (
        <>
            <TextField id="outlined-basic" variant="outlined" value={val} onChange={handleChange} />
            <AiFillPlusCircle
                style={{ width: '40px', height: '40px', color: '#009FBE', margin: '5px', cursor: 'pointer' }}
                onClick={() => {
                    dispatch(myEmployeeAttendenceOvertime(employee, date.getMonth() + 1, date.getFullYear(), val, date.getDate()));
                }}
            />
        </>
    );
}
