// material-ui
import { useTheme } from '@mui/material/styles';
import logo from '../assets/images/logo.svg';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        <img src={logo} alt="Easy HR" width="125" />
        /**
         * if you want to use SVG instead of Image uncomment following, and comment out <img> element.
         *
         */
    );
};

export default Logo;
