import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import TotalClientCard from './TotalClientCard';
import HolidayCard from './HolidayCard';
import AdminTotalEmployeesCard from './AdminTotalEmployeesCard';
import AddClientCard from './AddClientCard';
import ManageClientCard from './ManageClientCard';
import { gridSpacing } from 'store/constant/customizationConstant';
import NewJoiningCard from './NewJoiningCard';
import { useSelector } from 'react-redux';
import LatestClient from './LatestClient';
import ViewPFRemittance from './ViewPFRemittance';
import AddPFRemittanceCard from './AddPFRemittance';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const { user } = useSelector((state) => state.auth);

    return (
        <>
            {user && user.role === 'admin' && (
                <Grid container spacing={gridSpacing} style={{ overflow: 'hidden' }}>
                    <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item lg={4} md={12} sm={12} xs={12}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item sm={6} xs={12} md={6} lg={12}>
                                        <AddClientCard isLoading={isLoading} />
                                    </Grid>
                                    <Grid item sm={6} xs={12} md={6} lg={12}>
                                        <ManageClientCard isLoading={isLoading} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <TotalClientCard isLoading={isLoading} />
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <AdminTotalEmployeesCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={4}>
                                <HolidayCard isLoading={isLoading} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <HolidayCard isLoading={isLoading} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <LatestClient isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
            {user && user.role === 'user' && (
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <AdminTotalEmployeesCard isLoading={isLoading} />
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <NewJoiningCard isLoading={isLoading} />
                            </Grid>

                            <Grid item lg={4} md={12} sm={12} xs={12}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item sm={6} xs={12} md={6} lg={12}>
                                        <AddPFRemittanceCard isLoading={isLoading} />
                                    </Grid>
                                    <Grid item sm={6} xs={12} md={6} lg={12}>
                                        <ViewPFRemittance isLoading={isLoading} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={4}>
                                <HolidayCard isLoading={isLoading} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <HolidayCard isLoading={isLoading} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <LatestClient isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    );
};
export default Dashboard;
