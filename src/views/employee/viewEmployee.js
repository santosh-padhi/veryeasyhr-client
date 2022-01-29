import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myEmployee, clearErrors } from '../../store/actions/employeeAction';

// material ui import
import { Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AttendanceTopbar from 'ui-component/attendence-topbar';
import { StyledContainer, StyledTable, StyledTableRow, StyledTableCell, StyledMainCardSalary } from 'ui-component/tables/tablestyle';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import Pagination from '@mui/material/Pagination';
import PaymentSidepanel from 'ui-component/payment/paymentsidepanel';
import formatDate from 'utils/date-format';

// ==============================|| VIEW ATTENDENCE PAGE ||============================== //

const ViewEmployee = () => {
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(1);

    const { error, orders } = useSelector((state) => state.myEmployee);
    console.log(orders);

    useEffect(() => {
        dispatch(myEmployee(page));
        if (error) {
            console.log(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, page]);
    const [open, setOpen] = useState('inactivesidebar');

    const handleClickOpen = () => {
        setOpen('activesidebar');
    };
    const handleChange = (event, value) => {
        setPage(value);
    };
    const handleClose = () => {
        setOpen('inactivesidebar');
    };
    return (
        <StyledMainCardSalary>
            <AttendanceTopbar name="Employee List" search="true" />
            <Typography variant="body2">
                <StyledContainer component={Paper}>
                    <StyledTable sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Sr No.</StyledTableCell>
                                <StyledTableCell align="center">UAN No.</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Contact Number</StyledTableCell>
                                <StyledTableCell align="center">Date of Birth</StyledTableCell>
                                <StyledTableCell align="center">Designation</StyledTableCell>
                                <StyledTableCell align="center">Mode of Wages</StyledTableCell>
                                <StyledTableCell align="center">Joining Date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders?.employees?.map((row, index) => (
                                <StyledTableRow
                                    key={(page - 1) * 10 + index + 1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {(page - 1) * 10 + index + 1}
                                    </TableCell>
                                    <TableCell align="center">{row?.companyDetails?.UAN}</TableCell>
                                    <TableCell align="center">{row?.personalDetails?.fullName}</TableCell>
                                    <TableCell align="center">{row?.personalDetails?.mobileNo}</TableCell>
                                    <TableCell align="center">{formatDate(row?.personalDetails?.dob)}</TableCell>
                                    <TableCell align="center">{row?.companyDetails?.designation}</TableCell>
                                    <TableCell align="center">{row?.companyDetails?.selectWages}</TableCell>
                                    <TableCell align="center">{formatDate(row?.companyDetails?.joiningDate)}</TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                    <Pagination
                        count={Math.floor(orders?.employeeCount / 10) + 1}
                        color="primary"
                        style={{ float: 'right' }}
                        page={page}
                        onChange={handleChange}
                    />
                </StyledContainer>
            </Typography>
        </StyledMainCardSalary>
    );
};

export default ViewEmployee;
