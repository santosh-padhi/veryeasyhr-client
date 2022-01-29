import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant/customizationConstant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, clearErrors } from 'store/actions/userActions';
import { useEffect } from 'react';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const LatestEmployees = ({ isLoading }) => {
    const theme = useTheme();
    const { error, users } = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allUsers(1, -1, 3));
        if (error) {
            console.log(error);
            dispatch(clearErrors());
        }
    }, [dispatch]);
    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4">Latest Added Employees</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                {users?.users?.map((item, index) => {
                                    const date = new Date(item.createdAt);
                                    const monthNames = [
                                        'January',
                                        'February',
                                        'March',
                                        'April',
                                        'May',
                                        'June',
                                        'July',
                                        'August',
                                        'September',
                                        'October',
                                        'November',
                                        'December'
                                    ];
                                    return (
                                        <>
                                            <Grid container direction="column">
                                                <Grid item>
                                                    <Grid container alignItems="center" justifyContent="space-between">
                                                        <Grid item>
                                                            <Typography variant="subtitle1" color="inherit">
                                                                {item.name}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container alignItems="center" justifyContent="space-between">
                                                                <Grid item>
                                                                    <Typography variant="subtitle1" color="inherit">
                                                                        {`${date.getDate()}
                                                                            ${monthNames[date.getMonth()]} 
                                                                           `}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            {index !== 2 && <Divider sx={{ my: 1.5 }} />}
                                        </>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                        <Button size="small" disableElevation>
                            <Link to="/roles/manage-user" style={{ textDecoration: 'none', color: '#009FBE', fontWeight: 400 }}>
                                View All
                            </Link>
                        </Button>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
};

LatestEmployees.propTypes = {
    isLoading: PropTypes.bool
};

export default LatestEmployees;
