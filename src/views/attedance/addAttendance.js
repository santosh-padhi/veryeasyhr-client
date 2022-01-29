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
    const [text, settext] = useState('Successfully Added!');
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center'
    });
    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const [selectFile, setselectFile] = useState(null);

    const onFileChange = (event) => {
        // Update the state
        setselectFile(event.target.files[0]);
    };

    const onFileUpload = () => {
        // Create an object of formData
        const csvData = new FormData();
        csvData.append('file', selectFile);
        // Request made to the backend api
        // Send formData object
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                withCredentials: true
            }
        };
        console.log(selectFile);
        axios
            .post('/api/v1/employee/attendance/csv', csvData, config)
            .then((res) => {
                console.log(res);
                settext('File upload successfully!');
                setsuccess('success');
                setState({
                    open: true,
                    ...{
                        vertical: 'top',
                        horizontal: 'right'
                    }
                });
            })
            .catch((err) => {
                console.log(err);
                settext('Error!');
                setsuccess('error');
                setState({
                    open: true,
                    ...{
                        vertical: 'top',
                        horizontal: 'right'
                    }
                });
            });
    };

    useEffect(() => {
        dispatch(myEmployee(page));
        if (error) {
            console.log(error);
            dispatch(clearErrors());
        }
    }, [dispatch, page]);

    const handleChange = (event, value) => {
        if (value > largestPage) {
            setLargestPage(value);
        }
        setPage(value);
    };
    const handleSwitch = (date, x) => {
        setDisabled(false);
        setDate(date);
        setSelectToday(x);
    };
    return (
        <StyledMainCard>
            <AttendanceTopbar
                name="Add Attendance"
                search="true"
                date="true"
                filter="true"
                today="true"
                isshow={1}
                parentCallback2={handleSwitch}
            />
            <hr style={{ color: 'white' }} />
            <div style={{ float: 'right' }}>
                <label
                    htmlFor="form_input"
                    className="form_label"
                    style={{
                        background: '#1dd1a1',
                        borderRadius: '35px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50px',
                        width: '220px',
                        marginRight: '10px'
                    }}
                >
                    <input
                        type="file"
                        onChange={onFileChange}
                        id="form_input"
                        className="form_input"
                        style={{ width: '10px', height: '10px', opacity: 0, visibility: 'hidden' }}
                    />
                    <FileUploadIcon className="form_icon" style={{ marginRight: '5px', color: 'white' }} />
                    <span className="form_text" style={{ fontWeight: 600, fontSize: '18px', color: '#fff' }}>
                        Choose a CSV File
                    </span>
                </label>
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
                                    <TableCell align="center">{item?.personalDetails?.mobileNo}</TableCell>
                                    <TableCell align="center">{item?.companyDetails?.designation}</TableCell>
                                    <TableCell align="center">{item?.companyDetails?.selectWages}</TableCell>
                                    <TableCell align="center">
                                        <BasicSwitch
                                            disabled={disabled}
                                            data={item}
                                            largest={largestPage}
                                            page={page}
                                            date={date}
                                            index={index}
                                            selectToday={selectToday}
                                        />
                                    </TableCell>
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
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                autoHideDuration={3000}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity={successes} sx={{ width: '100%' }}>
                    {text}
                </Alert>
            </Snackbar>
        </StyledMainCard>
    );
};
export default AddAttendance;
