import * as React from 'react';
// material ui import
import { Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AttendanceTopbar from 'ui-component/attendence-topbar';
import { StyledContainer, StyledMainCard, StyledTable, StyledTableRow, StyledTableCell } from 'ui-component/tables/tablestyle';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';

import formatDate from 'utils/date-format';
import { clearErrors } from 'store/actions/userActions';
import { myAttendence } from 'store/actions/attendenceAction';

// ==============================|| VIEW ATTENDENCE PAGE ||============================== //

const LeaveManage = () => {
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
            <AttendanceTopbar name="Manage Employee Leave" search="true" parentCallback2={handleDate} />
            <Typography variant="body2">
                <StyledContainer component={Paper}>
                    <StyledTable sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Sr No.</StyledTableCell>
                                <StyledTableCell align="center">UAN No.</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Phone</StyledTableCell>
                                <StyledTableCell align="center">Joining Date</StyledTableCell>
                                <StyledTableCell align="center">Total Leave</StyledTableCell>
                                <StyledTableCell align="center">Avail Leave</StyledTableCell>
                                <StyledTableCell align="center">Carry Forward</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {attend?.employeesAttendance?.map((item, index) => (
                                <StyledTableRow
                                    key={(page - 1) * 10 + index + 1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {(page - 1) * 10 + index + 1}
                                    </TableCell>
                                    <TableCell align="center">{item?.UAN}</TableCell>
                                    <TableCell align="center">{item?.fullName}</TableCell>
                                    <TableCell align="center">{item?.mobileNo}</TableCell>
                                    <TableCell align="center">{formatDate(item?.joiningDate)}</TableCell>
                                    <TableCell align="center">{item?.totalLeave}</TableCell>
                                    <TableCell align="center">{item?.availLeave}</TableCell>
                                    <TableCell align="center">{item?.carryForward}</TableCell>
                                </StyledTableRow>
                            ))}
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

export default LeaveManage;
