import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myEmployee, clearErrors } from '../../store/actions/employeeAction';

// material ui import
import { Button, Typography } from '@mui/material';
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
import { allUsers } from 'store/actions/userActions';

// ==============================|| VIEW ATTENDENCE PAGE ||============================== //

const ManageUser = () => {
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(1);

    const { error, users } = useSelector((state) => state.allUsers);
    console.log(users);

    useEffect(() => {
        dispatch(allUsers(page, 1, 10));
        if (error) {
            console.log(error);
            dispatch(clearErrors());
        }
    }, [dispatch, page]);
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
            <AttendanceTopbar name="Manage Client" search="true" />
            <Typography variant="body2">
                <StyledContainer component={Paper}>
                    <StyledTable sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Sr No.</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Contact Number</StyledTableCell>
                                <StyledTableCell align="center">Company Name</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.users?.map((row, index) => (
                                <StyledTableRow
                                    key={(page - 1) * 10 + index + 1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {(page - 1) * 10 + index + 1}
                                    </TableCell>
                                    <TableCell align="center">{row?.name}</TableCell>
                                    <TableCell align="center">{row?.phoneNo}</TableCell>
                                    <TableCell align="center">{row?.email}</TableCell>
                                    <TableCell align="center">{row?.companyName}</TableCell>
                                    <TableCell align="center">
                                        <Button>Edit</Button>
                                        <Button>Delete</Button>
                                    </TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                    <Pagination
                        count={Math.floor(users?.usersCount / 10) + 1}
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

export default ManageUser;
