import React, { useState, useEffect } from 'react';
// material ui import
import { Alert, Button, Grid, Snackbar, Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import BasicSwitch from 'ui-component/switch';
import AttendanceTopbar from 'ui-component/attendence-topbar';
import { StyledContainer, StyledMainCard, StyledTable, StyledTableRow, StyledTableCell } from 'ui-component/tables/tablestyle';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { myEmployee } from 'store/actions/employeeAction';
import formatDate from 'utils/date-format';
import { clearErrors } from 'store/actions/userActions';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import axios from 'axios';
import { styled } from '@mui/material/styles';

// ==============================|| ADD ATTENDENCE PAGE ||============================== //

const UploadButton = styled(Button)(({ theme }) => ({
    background: '#009FBE',
    color: 'white',
    borderRadius: '35px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '220px',
    top: '-6px'
}));

const AddAttendance = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [disabled, setDisabled] = useState(true);
    const { error, orders } = useSelector((state) => state.myEmployee);
    const [date, setDate] = useState(new Date());
    const [largestPage, setLargestPage] = useState(0);
    const [selectToday, setSelectToday] = useState(false);
    console.log(orders);

    const [successes, setsuccess] = useState('success');
 
    const { vertical, horizontal, open } = state;

                date="true"
                filter="true"
                today="true"
                isshow={1}
                parentCallback2={handleSwitch}
            />
            <hr style={{ color: 'white' }} />
            <div style={{ float: 'right' }}>
               
                <UploadButton onClick={onFileUpload} type="submit">
                    Upload!
                </UploadButton>
            </div>
            <Typography variant="body2">
                <StyledContainer>
                    <StyledTable sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Sr No.</StyledTableCell>
                                <StyledTableCell align="center">UAN No.</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Joining Date</StyledTableCell>
                                <StyledTableCell align="center">Phone No</StyledTableCell>
                                <StyledTableCell align="center">Designation</StyledTableCell>
                                <StyledTableCell align="center">Mode of wages</StyledTableCell>
                                <StyledTableCell align="center">Attendance</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders?.employees?.map((item, index) => (
                                <StyledTableRow
                                    key={(page - 1) * 10 + index + 1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {(page - 1) * 10 + index + 1}
                                    </TableCell>
                                    <TableCell align="center">{item?.companyDetails?.UAN}</TableCell>
                                    <TableCell align="center">{item?.personalDetails?.fullName}</TableCell>
                                    <TableCell align="center">{formatDate(item?.companyDetails?.joiningDate)}</TableCell>
                                   
                <Alert onClose={handleClose} severity={successes} sx={{ width: '100%' }}>
                    {text}
                </Alert>
            </Snackbar>
        </StyledMainCard>
    );
};
export default AddAttendance;
