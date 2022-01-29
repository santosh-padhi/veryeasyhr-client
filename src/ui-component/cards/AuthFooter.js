// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://totalhr.in" target="_blank" underline="hover">
            EasyHR by TotalHR
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://totalhr.in" target="_blank" underline="hover">
            &copy; totalhr.in
        </Typography>
    </Stack>
);

export default AuthFooter;
