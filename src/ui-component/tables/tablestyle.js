import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';
import MainCard from 'ui-component/cards/MainCard';
import Typography from 'views/utilities/Typography';

export const StyledTableRow = styled(TableRow)`
    background-color: white;
`;

export const StyledContainer = styled(TableContainer)`
    background-color: #f2f2fc;
    border-spacing: 30px;
    border-collapse: separate;
`;

export const StyledTable = styled(Table)`
    border-spacing: 0px 15px;
    border-collapse: separate;
`;

export const StyledMainCard = styled(MainCard)`
    background-color: #f2f2fc;
`;

export const StyledMainCardSalary = styled(MainCard)`
    position: relative;
    background-color: #f2f2fc;
`;

export const StyledTableCell = styled(TableCell)`
    color: black;
    font-weight: 1000;
    border: none;
    font-size: 1.2em;
`;
