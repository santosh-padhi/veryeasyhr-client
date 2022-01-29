import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography, TextField, Button, Stepper, Step, StepLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { addEmployee } from 'store/actions/employeeAction';
import axios from 'axios';

const ColorButton = styled(Button)(({ theme }) => ({
    marginTop: '20px',
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: '22px',
    width: '100%',
    borderRadius: '5px',
    backgroundColor: '#009FBE'
}));
const UploadButton = styled(Button)(({ theme }) => ({
    color: 'black',
    fontFamily: 'Poppins',
    fontSize: '22px',
    width: '100%',
    borderRadius: '5px',
    backgroundColor: '#dcdcdc',
    boxShadow: 'none',
    fontWeight: 400
}));
const BackButton = styled(Button)(({ theme }) => ({
    marginTop: '20px',
    color: 'grey',
    fontFamily: 'Poppins',
    fontSize: '22px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #009FBE'
}));

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1)
    }
}));

function getSteps() {
    return ['Basic Details', 'Personal Details', 'Salary Details', 'Bank Details'];
}
const BasicDetails = () => {
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const {
        control,
        formState: { errors }
    } = useFormContext();
    console.log(errors);
    return (
        <>
            <Grid container spacing={6} alignItems="center" justifyContent="center" style={{ marginTop: '5px' }}>
                <Grid item xs={12} sm={10}>
                    <Controller
                        control={control}
                        name="fullName"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="full-name"
                                label="Full Name"
                                variant="outlined"
                                placeholder="Enter Full Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.fullName)}
                                helperText={errors.fullName?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="fatherName"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="father-name"
                                label="Father Name"
                                variant="outlined"
                                placeholder="Enter Father Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.fatherName)}
                                helperText={errors.fatherName?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="mobileNo"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="mobile-no"
                                label="Mobile Number"
                                variant="outlined"
                                placeholder="Enter 10 Digit Mobile Number"
                                fullWidth
                                margin="normal"
                                inputProps={{ maxLength: 10 }}
                                {...field}
                                error={Boolean(errors?.mobileNo)}
                                helperText={errors.mobileNo?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="gender"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="gender-label">Gender</InputLabel>
                                <Select
                                    labelId="gender-label"
                                    id="gender-select"
                                    value={gender}
                                    label="Gender"
                                    onChange={handleChange}
                                    {...field}
                                    error={Boolean(errors?.gender)}
                                    helperText={errors.gender?.message}
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="date"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                                {...field}
                                error={Boolean(errors?.date)}
                                helperText={errors.date?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="currentAddress"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="current-address"
                                label="Current Address"
                                variant="outlined"
                                placeholder="Enter Current Address"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.currentAddress)}
                                helperText={errors.currentAddress?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="permanentAddress"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="permanent-address"
                                label="Permanent Address"
                                variant="outlined"
                                placeholder="Enter Permanent Address"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.permanentAddress)}
                                helperText={errors.permanentAddress?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </>
    );
};
const CompanyDetails = () => {
    const {
        control,
        formState: { errors }
    } = useFormContext();
    console.log(errors);
    const [designation, setDesignation] = React.useState('');
    const [selectWages, setSelectWages] = React.useState('');
    const handleChange = (event) => {
        setDesignation(event.target.value);
        setSelectWages(event.target.value);
    };
    return (
        <>
            <Grid container spacing={6} alignItems="center" justifyContent="center" style={{ marginTop: '5px' }}>
                <Grid item xs={12} sm={10}>
                    <Controller
                        control={control}
                        name="uanNumber"
                        render={({ field }) => (
                            <TextField
                                id="uan"
                                label="UAN Number"
                                variant="outlined"
                                placeholder="Enter 12 Digit UAN Number"
                                fullWidth
                                margin="normal"
                                inputProps={{ maxLength: 12 }}
                                {...field}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="aadhaarNumber"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="aadhaar-number"
                                label="Aadhaar Number"
                                variant="outlined"
                                placeholder="Enter 12 Digit Aadhaar Number"
                                fullWidth
                                margin="normal"
                                inputProps={{ maxLength: 12 }}
                                {...field}
                                error={Boolean(errors?.aadhaarNumber)}
                                helperText={errors.aadhaarNumber?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="panNumber"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="pan-number"
                                label="Pan Number"
                                variant="outlined"
                                placeholder="Enter 10 Digit Pan Number"
                                fullWidth
                                margin="normal"
                                inputProps={{ maxLength: 10 }}
                                {...field}
                                error={Boolean(errors?.panNumber)}
                                helperText={errors.panNumber?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="drivingLicenses"
                        render={({ field }) => (
                            <TextField
                                id="driving-licenses"
                                label="Driving Licenses"
                                variant="outlined"
                                placeholder="Enter Driving Licenses Number"
                                fullWidth
                                margin="normal"
                                {...field}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="designation"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Designation</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={designation}
                                    label="Designation"
                                    onChange={handleChange}
                                    {...field}
                                    error={Boolean(errors?.designation)}
                                    helperText={errors.designation?.message}
                                >
                                    <MenuItem value="Skilled">Skilled</MenuItem>
                                    <MenuItem value="Semi Skilled">Semi Skilled</MenuItem>
                                    <MenuItem value="Un Skilled">Un Skilled</MenuItem>
                                    <MenuItem value="Others">Others</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="joiningDate"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="joining-date"
                                label="Joining Date"
                                type="date"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                                {...field}
                                error={Boolean(errors?.joiningDate)}
                                helperText={errors.joiningDate?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="selectWages"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Mode of Wages</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectWages}
                                    label="Select Wages"
                                    onChange={handleChange}
                                    {...field}
                                    error={Boolean(errors?.selectWages)}
                                    helperText={errors.selectWages?.message}
                                >
                                    <MenuItem value="Daily Wages">Daily Wages</MenuItem>
                                    <MenuItem value="Monthly Wages">Monthly Wages</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="sickLeave"
                        render={({ field }) => (
                            <TextField
                                id="sick-leave"
                                label="Sick Leave"
                                variant="outlined"
                                placeholder="Enter Sick Leave"
                                fullWidth
                                margin="normal"
                                {...field}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="casualLeave"
                        render={({ field }) => (
                            <TextField
                                id="casual-leave"
                                label="Casual Leave"
                                variant="outlined"
                                placeholder="Enter Casual Leave"
                                fullWidth
                                margin="normal"
                                {...field}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </>
    );
};
const SalaryDetails = () => {
    const {
        control,
        formState: { errors }
    } = useFormContext();
    console.log(errors);
    return (
        <>
            <Grid container spacing={6} alignItems="center" justifyContent="center" style={{ marginTop: '5px' }}>
                <Grid item xs={12} sm={10}>
                    <Controller
                        control={control}
                        name="basicSalary"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="basic-salary"
                                label="Basic Salary"
                                variant="outlined"
                                placeholder="Enter Basic Salary"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.basicSalary)}
                                helperText={errors.basicSalary?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="hra"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="hra"
                                label="HRA"
                                variant="outlined"
                                placeholder="Enter Employee HRA"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.hra)}
                                helperText={errors.hra?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="con"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="con"
                                label="Con"
                                variant="outlined"
                                placeholder="Enter Employee Con"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.con)}
                                helperText={errors.con?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="medical"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="medical"
                                label="Medical"
                                variant="outlined"
                                placeholder="Enter Employee Medical"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.medical)}
                                helperText={errors.medical?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="education"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="education"
                                label="Education"
                                variant="outlined"
                                placeholder="Enter Employee Education"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.education)}
                                helperText={errors.education?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="canteen"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="canteen"
                                label="Canteen"
                                variant="outlined"
                                placeholder="Enter Employee Canteen"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.canteen)}
                                helperText={errors.canteen?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="incomeTax"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="incomeTax"
                                label="Income Tax"
                                variant="outlined"
                                placeholder="Enter Income Tax"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.incomeTax)}
                                helperText={errors.incomeTax?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </>
    );
};
const BankDetails = () => {
    const {
        control,
        formState: { errors }
    } = useFormContext();
    console.log(errors);
    return (
        <>
            <Grid container spacing={6} alignItems="center" justifyContent="center" style={{ marginTop: '5px' }}>
                <Grid item xs={12} sm={10}>
                    <Controller
                        control={control}
                        name="bankName"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="bank-name"
                                label="Bank Name"
                                variant="outlined"
                                placeholder="Enter Bank Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.bankName)}
                                helperText={errors.bankName?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="bankIfsc"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="bankIfsc"
                                label="IFSC Code"
                                variant="outlined"
                                placeholder="Enter Bank IFSC Code"
                                fullWidth
                                margin="normal"
                                inputProps={{ maxLength: 11 }}
                                {...field}
                                error={Boolean(errors?.bankIfsc)}
                                helperText={errors.bankIfsc?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="accountNo"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="accountNo"
                                label="Account Number"
                                variant="outlined"
                                placeholder="Enter Account Number"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.accountNo)}
                                helperText={errors.accountNo?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="confirmAccount"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="confirmAccount"
                                label="Confirm Account Number"
                                variant="outlined"
                                placeholder="Confirm Your Account Number"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.confirmAccount)}
                                helperText={errors.confirmAccount?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="pfNominee"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="pfNominee"
                                label="PF Nominee"
                                variant="outlined"
                                placeholder="Enter PF Nominee Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.pfNominee)}
                                helperText={errors.pfNominee?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="gratuityNominee"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="gratuityNominee"
                                label="Gratuity Nominee"
                                variant="outlined"
                                placeholder="Enter Gratuity Nominee Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.gratuityNominee)}
                                helperText={errors.gratuityNominee?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Controller
                        control={control}
                        name="leaveNominee"
                        rules={{ required: 'this field is required.' }}
                        render={({ field }) => (
                            <TextField
                                id="leave-nominee"
                                label="Leave Nominee"
                                variant="outlined"
                                placeholder="Enter Leave Nominee Name"
                                fullWidth
                                margin="normal"
                                {...field}
                                error={Boolean(errors?.leaveNominee)}
                                helperText={errors.leaveNominee?.message}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </>
    );
};

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BasicDetails />;

        case 1:
            return <CompanyDetails />;
        case 2:
            return <SalaryDetails />;
        case 3:
            return <BankDetails />;
        default:
            return 'unknown step';
    }
}

const LinaerStepper = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            fullName: '',
            fatherName: '',
            mobileNo: '',
            gender: '',
            date: '',
            currentAddress: '',
            permanentAddress: '',
            uanNumber: '',
            aadhaarNumber: '',
            panNumber: '',
            drivingLicenses: '',
            designation: '',
            selectWages: '',
            sickLeave: '',
            casualLeave: '',
            dailyWages: '',
            joiningDate: '',
            basicSalary: '',
            hra: '',
            con: '',
            medical: '',
            education: '',
            canteen: '',
            incomeTax: '',
            bankName: '',
            bankIfsc: '',
            accountNo: '',
            confirmAccount: '',
            pfNominee: '',
            gratuityNominee: '',
            leaveNominee: ''
        }
    });
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
            .post('/api/v1/employees/csv', csvData, config)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();
    const isStepOptional = (step) => step === 1 || step === 2;
    const isStepFalied = () => {
        Boolean(Object.keys(methods.formState.errors).length);
    };
    const isStepSkipped = (step) => {
        skippedSteps.includes(step);
    };
    const handleNext = (data) => {
        console.log(data);
        if (activeStep === steps.length - 1) {
            dispatch(addEmployee(methods.getValues()));
            fetch('/api/v1/employees/new')
                .then((data) => data.json())
                .then((res) => {
                    console.log(res);
                    setActiveStep(activeStep + 1);
                });
        } else {
            setActiveStep(activeStep + 1);
            setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
        }

        if (activeStep === steps.length - 2) {
            const x =
                parseInt(data.basicSalary, 10) +
                parseInt(data.hra, 10) +
                parseInt(data.con, 10) +
                parseInt(data.medical, 10) +
                parseInt(data.education, 10) +
                parseInt(data.canteen, 10) +
                parseInt(data.incomeTax, 10);

            methods.setValue('dailyWages', Math.round(x).toString());
            console.log(methods.getValues());
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    // const onSubmit = (data) => {
    //   console.log(data);
    // };
    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepFalied() && activeStep === index) {
                        labelProps.error = true;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center" style={{ marginTop: '50px' }}>
                    Your detail submitted successfully!..
                </Typography>
            ) : (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep)}

                            {/* <Button className={classes.button} disabled={activeStep === 0} onClick={handleBack}>
                                back
                            </Button>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                // onClick={handleNext}
                                type="submit"
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button> */}
                            <Grid container spacing={6} alignItems="center" justifyContent="center">
                                <Grid item xs={12} sm={5}>
                                    <BackButton className={classes.button} disabled={activeStep === 0} onClick={handleBack}>
                                        Back
                                    </BackButton>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <ColorButton type="submit" className={classes.button} variant="contained">
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </ColorButton>
                                </Grid>
                            </Grid>
                            <Grid container spacing={6} alignItems="center" justifyContent="center">
                                <Grid item xs={12} sm={10}>
                                    <hr style={{ marginTop: '35px', color: 'white' }} />
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        id="upload_file"
                                        name="uploadFile"
                                        type="file"
                                        fullWidth
                                        autoComplete="shipping postal-code"
                                        variant="outlined"
                                        onChange={onFileChange}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <UploadButton type="button" onClick={onFileUpload} className={classes.button} variant="contained">
                                        Upload File
                                    </UploadButton>
                                </Grid>
                            </Grid>
                        </form>
                    </FormProvider>
                </>
            )}
        </div>
    );
};

export default LinaerStepper;
