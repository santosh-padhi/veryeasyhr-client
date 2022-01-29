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
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from 'store/actions/userActions';
import { myAttendence } from 'store/actions/attendenceAction';
import formatDate from 'utils/date-format';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

// ==============================|| VIEW ATTENDENCE PAGE ||============================== //

const ViewAttendance = () => {
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(1);
    const { error, attend } = useSelector((state) => state.getAttendence);
    const [date, setdate] = React.useState(new Date());
    const [showsetails, setshowdetails] = React.useState(true);

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
            <AttendanceTopbar name="View Attendance" search="true" date="true" filter="true" parentCallback2={handleDate} />
            <Typography variant="body2">
                <StyledContainer component={Paper}>
                    <StyledTable sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Sr No.</StyledTableCell>

                                {showsetails === true && <StyledTableCell align="center">UAN No.</StyledTableCell>}
                                <StyledTableCell align="center">Full Name</StyledTableCell>
                                <StyledTableCell align="center">Mobile No</StyledTableCell>
                                {showsetails === false && <StyledTableCell align="center">Paid Leave</StyledTableCell>}
                                {showsetails === false && <StyledTableCell align="center">Casual Leave</StyledTableCell>}
                                {showsetails === false && <StyledTableCell align="center">Sick Leave</StyledTableCell>}
                                {showsetails === false && <StyledTableCell align="center">Paid Holiday</StyledTableCell>}
                                {showsetails === false && <StyledTableCell align="center">Paid Weekly Off</StyledTableCell>}
                                {showsetails === false && <StyledTableCell align="center">Unpaid Weekly Off</StyledTableCell>}
                                {showsetails === false && <StyledTableCell align="center">Leave with permission</StyledTableCell>}
                                {showsetails === false && <StyledTableCell align="center">Leave without permission</StyledTableCell>}
                                {showsetails === true && <StyledTableCell align="center">Joining Date</StyledTableCell>}
                                <StyledTableCell align="center">Working Days</StyledTableCell>
                                {showsetails === true && <StyledTableCell align="center">Over Time (hr)</StyledTableCell>}
                                <StyledTableCell align="center">View Attendance</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {attend?.employeesAttendance?.map((row, index) => {
                                let count = 0;
                                let pl = 0;
                                let cl = 0;
                                let sl = 0;
                                let ph = 0;
                                let pw = 0;
                                let pwo = 0;
                                let lp = 0;
                                let lwp = 0;
                                let ot = 0;
                                for (let x = 0; x < row?.employeeAttendance?.length; x += 1) {
                                    if (row?.employeeAttendance[x]?.date === date.getDate()) {
                                        ot = row?.employeeAttendance[x]?.overtime;
                                    }
                                    if (row?.employeeAttendance[x]?.attendance === true) {
                                        count += 1;
                                        console.log('y');
                                    } else {
                                        switch (row?.employeeAttendance[x]?.leave) {
                                            case 'Paid Leave':
                                                pl += 1;
                                                break;
                                            case 'Casual Leave':
                                                cl += 1;
                                                break;
                                            case 'Sick Leave':
                                                sl += 1;
                                                break;
                                            case 'Paid Holiday':
                                                ph += 1;
                                                break;
                                            case 'Paid Weekly Off':
                                                pw += 1;
                                                break;
                                            case 'Unpaid Weekly Off':
                                                pwo += 1;
                                                break;
                                            case 'Leave with Permission':
                                                lp += 1;
                                                break;
                                            case 'Leave without Permission':
                                                lwp += 1;
                                                break;
                                            default:
                                                break;
                                        }
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
                                        {showsetails === true && <TableCell align="center">{row?.UAN}</TableCell>}
                                        <TableCell align="center">{row?.fullName}</TableCell>
                                        <TableCell align="center">{row?.mobileNo}</TableCell>
                                        {showsetails === false && <TableCell align="center">{pl}</TableCell>}
                                        {showsetails === false && <TableCell align="center">{cl}</TableCell>}
                                        {showsetails === false && <TableCell align="center">{sl}</TableCell>}
                                        {showsetails === false && <TableCell align="center">{ph}</TableCell>}
                                        {showsetails === false && <TableCell align="center">{pw}</TableCell>}
                                        {showsetails === false && <TableCell align="center">{pwo}</TableCell>}
                                        {showsetails === false && <TableCell align="center">{lp}</TableCell>}
                                        {showsetails === false && <TableCell align="center">{lwp}</TableCell>}
                                        {showsetails === true && <TableCell align="center">{formatDate(row?.joiningDate)}</TableCell>}
                                        <TableCell
                                            align="center"
                                            onClick={() => {
                                                setshowdetails(!showsetails);
                                            }}
                                        >
                                            {count}
                                        </TableCell>
                                        {showsetails === true && <TableCell align="center">{ot}</TableCell>}

                                        <TableCell align="center">
                                            <Link to={`/attendance/event/${row.employee}`} target="_blank">
                                                <RemoveRedEyeIcon />
                                            </Link>
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
export default ViewAttendance;
