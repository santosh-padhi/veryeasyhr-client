import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, Box, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addRoles, clearErrors } from '../../store/actions/employeeAction';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADD_ROLES_RESET } from '../../store/constant/employeeConstant';
// ==============================|| SAMPLE PAGE ||============================== //

const ColorButton = styled(Button)(({ theme }) => ({
    marginTop: '20px',
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '22px',
    width: '100%',
    backgroundColor: '#009FBE'
}));

export default function AddUser() {
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const dispatch = useDispatch();
    const { error, success } = useSelector((state) => state.addRole);
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [successes, setSuccess] = useState('success');
    const [text, setText] = useState('Successfully Added!');
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center'
    });
    const { vertical, horizontal, open } = state;

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
            setText('Error!');
            setSuccess('error');
            setState({
                open: true,
                ...{
                    vertical: 'top',
                    horizontal: 'right'
                }
            });
        }
        if (success) {
            navigate('/roles/add-user');
            dispatch({ type: ADD_ROLES_RESET });
            setText('New User Added !');
            setSuccess('success');
            setState({
                open: true,
                ...{
                    vertical: 'top',
                    horizontal: 'right'
                }
            });
        }
    }, [dispatch, error, success]);
    const handleClose = () => {
        setState({ ...state, open: false });
    };
    const submitHandler = (e) => {
        e.preventDefault();

        const x = {};
        x.name = name;
        x.phoneNo = phoneNo;
        x.email = email;
        x.password = password;
        x.companyName = companyName;
        console.log(x);
        dispatch(addRoles(x));
    };

    return (
        <>
            {user && user.role === 'admin' && (
                <Container component={Box} p={4}>
                    <Typography variant="h1" gutterBottom>
                        Add Client
                    </Typography>
                    <form onSubmit={submitHandler} encType="multipart/form-data">
                        <Grid container spacing={4} alignItems="center" justifyContent="center" style={{ marginTop: '35px' }}>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    label="Full name"
                                    placeholder="Enter Full Name"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    required
                                    id="phoneNo"
                                    name="phoneNo"
                                    label="Mobile Number"
                                    placeholder="Enter Mobile Number"
                                    fullWidth
                                    autoComplete="mobile-number"
                                    variant="outlined"
                                    value={phoneNo}
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    required
                                    id="email"
                                    type="email"
                                    name="email"
                                    label="Email"
                                    placeholder="Enter Email Address"
                                    fullWidth
                                    autoComplete="shipping address-level2"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    required
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Set Password"
                                    placeholder="Set User Password"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <TextField
                                    required
                                    id="companyName"
                                    name="companyName"
                                    label="Company Name"
                                    fullWidth
                                    autoComplete="Company Name"
                                    variant="outlined"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <ColorButton variant="contained" type="submit">
                                    Add Client
                                </ColorButton>
                            </Grid>
                        </Grid>
                    </form>
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        autoHideDuration={3000}
                        key={vertical + horizontal}
                    >
                        <Alert
                            onClose={handleClose}
                            severity={successes}
                            sx={{ width: '100%' }}
                            style={{ backgroundColor: 'green', color: 'white' }}
                        >
                            {text}
                        </Alert>
                    </Snackbar>
                </Container>
            )}
        </>
    );
}
