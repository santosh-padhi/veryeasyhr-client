import * as React from 'react';
// material ui import
import { Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AttendanceTopbar from 'ui-component/attendence-topbar';
import { StyledContainer, StyledMainCard, StyledTable, StyledTableCell, StyledTableRow } from 'ui-component/tables/tablestyle';
import OvertimeInput from 'ui-component/tables/increasetextfield';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';

import formatDate from 'utils/date-format';
import { clearErrors } from 'store/actions/userActions';
import { myAttendence } from 'store/actions/attendenceAction';

// ==============================|| OVERTIME PAGE ||============================== //

const Overtime = () => {
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(1);
    const { error, attend } = useSelector((state) => state.getAttendence);
    const [date, setdate] = React.useState(new Date());
    React.useEffect(() => {
        dispatch(myAttendence(page, date.getMonth(), date.getFullYear()));
        if (error) {
            console.log(error);
            dispatch(clearErrors());
        }
    }, [dispatch, page, date]);

    const handleChange = (event, value) => {
        setPage(value);
    };
    const handleDate = (date) => {
        setdate(date);
    };

    console.log(attend);

    return (
        <StyledMainCard>
            <AttendanceTopbar name="Employees OverTime List" search="true" date="true" filter="true" parentCallback2={handleDate} />
            <Typography variant="body2">
                <StyledContainer component={Paper}>
                    <StyledTable sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Sr No.</StyledTableCell>
                                <StyledTableCell align="center">UAN No.</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Joining Date</StyledTableCell>
                                <StyledTableCell align="center">Designation</StyledTableCell>
                                <StyledTableCell align="center">Daily wages</StyledTableCell>
                                <StyledTableCell align="center">Total OT</StyledTableCell>
                                <StyledTableCell align="center">Add Over Time (O.T)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {attend?.employeesAttendance?.map((item, index) => {
                                let y = 0;
                                for (let i = 0; i < item.employeeAttendance.length; i += 1) {
                                    if (item.employeeAttendance[i].date === date.getDate()) {
                                        y = item.employeeAttendance[i].overtime;
                                    }
                                }
                                return (
                                    <StyledTableRow
                                        key={(page - 1) * 10 + index + 1}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center" component="th" scope="row">
                                            {(page - 1) * 10 + index + 1}
                                        </TableCell>
                                        <TableCell align="center">{item?.UAN}</TableCell>
                                        <TableCell align="center">{item?.fullName}</TableCell>
                                        <TableCell align="center">{formatDate(item?.joiningDate)}</TableCell>
                                        <TableCell align="center">{item?.designation}</TableCell>
                                        <TableCell align="center">{item?.dailyWages}</TableCell>
                                        <TableCell align="center">{y}</TableCell>
                                        <TableCell align="center">
                                            <OvertimeInput employee={item.employee} date={date} value={y} />
                                        </TableCell>
                                    </StyledTableRow>
                                );
                            })}
                        </TableBody>
                    </StyledTable>
                    <Pagination
                        count={Math.floor(attend?.length / 10) + 1}
                        color="primary"
                        style={{ float: 'right' }}
                        page={page}
                        onChange={handleChange}
                    />
                </StyledContainer>
            </Typography>
        </StyledMainCard>
    );
};

export default Overtime;
