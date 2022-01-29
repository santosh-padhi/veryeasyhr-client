import FilterListIcon from '@mui/icons-material/FilterList';
import './utils.css';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CsvDownloader from 'react-csv-downloader';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { myEmployee } from 'store/actions/employeeAction';
import axios from 'axios';

// export function FilterButton() {
//     return (
//         <div>
//             <button type="button" className="filter-btn">
//                 Filter
//                 <FilterListIcon />
//             </button>
//         </div>
//     );
// }

export function DownloadCsv(props) {
    const [data, setdata] = useState([]);
    const [downloadstring, setdownloadstring] = useState('');
    const [employeeAttendance, setemployeeAttendance] = React.useState([]);

    const columns = [
        {
            id: 'UAN',
            displayName: 'UAN'
        },
        {
            id: 'Name',
            displayName: 'Name'
        },
        {
            id: 'GrossWages',
            displayName: 'Gross Wages'
        },
        {
            id: 'EPFWages',
            displayName: 'EPF Wages'
        },
        {
            id: 'EPSWages',
            displayName: 'EPS Wages'
        },
        {
            id: 'EDLIWages',
            displayName: 'EDLI Wages'
        },
        {
            id: 'EPFContribution',
            displayName: 'EPF Contribution'
        },
        {
            id: 'EPSContribution',
            displayName: 'EPS Contribution'
        },
        {
            id: 'EPFEPSDIFF',
            displayName: 'EPF EPS DIFF'
        },
        {
            id: 'NCPDAYS',
            displayName: 'NCP DAYS'
        },
        {
            id: 'REFUNDOFADVANCE',
            displayName: 'REFUND OF ADVANCE'
        }
    ];

    const { error, orders } = useSelector((state) => state.myEmployee);

    const { page, tempdate } = props;
    const dispatch = useDispatch();
    const date = new Date(tempdate);

    React.useEffect(() => {
        axios
            .get(
                `http://localhost:4000/api/v1/employee/attendance/mylist/${date.getMonth() + 1}/${date.getFullYear()}?limit=${9999999999}`,
                {
                    withCredentials: true
                }
            )
            .then((data) => {
                setemployeeAttendance(data.data.employeesAttendance);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [tempdate, page]);

    const getAttendence = (employee) => {
        let count = 0;
        let ot = 0;

        for (let j = 0; j < employeeAttendance.length; j += 1) {
            if (employeeAttendance[j]?.employee === employee) {
                for (let i = 0; i < employeeAttendance[j]?.employeeAttendance?.length; i += 1) {
                    if (
                        employeeAttendance[j]?.employeeAttendance[i]?.attendance === true ||
                        employeeAttendance[j]?.employeeAttendance[i]?.leave === 'Casual Leave' ||
                        employeeAttendance[j]?.employeeAttendance[i]?.leave === 'Sick Leave' ||
                        employeeAttendance[j]?.employeeAttendance[i]?.leave === 'Paid Leave' ||
                        employeeAttendance[j]?.employeeAttendance[i]?.leave === 'Paid Holiday' ||
                        employeeAttendance[j]?.employeeAttendance[i]?.leave === 'Paid Weekly Off'
                    ) {
                        count += 1;
                    }
                    if (employeeAttendance[j]?.employeeAttendance[i]?.overtime) {
                        ot += employeeAttendance[j]?.employeeAttendance[i]?.overtime;
                    }
                }

                return { count, ot };
            }
        }
        return 0;
    };

    const downloadTxtFile = (str) => {
        const element = document.createElement('a');
        const file = new Blob([str], {
            type: 'text/plain'
        });
        element.href = URL.createObjectURL(file);
        element.download = `ECR Challan ${date.getMonth() + 1}.txt`;
        document.body.appendChild(element);
        element.click();
    };

    useEffect(() => {
        dispatch(myEmployee(page));
    }, [page]);

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
    console.log(date);
    useEffect(() => {
        let m = {};
        const x = [];
        let str = '';
        if (orders) {
            const totalDaysOfMonth = parseInt(daysInMonth(date.getMonth() + 1, date.getFullYear()), 10);

            for (let i = 0; i < orders?.employees?.length; i += 1) {
                /* eslint no-underscore-dangle: 0 */

                const count = getAttendence(orders?.employees[i]?._id);

                m = {};
                m.UAN = orders?.employees[i]?.companyDetails?.UAN;
                m.Name = orders?.employees[i]?.personalDetails?.fullName;
                m.GrossWages = Math.round(
                    (orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth +
                        (orders?.employees[i]?.salaryDetails?.hra * count.count) / totalDaysOfMonth +
                        (orders?.employees[i]?.salaryDetails?.con * count.count) / totalDaysOfMonth +
                        (orders?.employees[i]?.salaryDetails?.medical * count.count) / totalDaysOfMonth +
                        (orders?.employees[i]?.salaryDetails?.education * count.count) / totalDaysOfMonth
                );
                m.EPFWages = Math.round((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth);
                m.EPSWages = Math.round((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth);
                m.EDLIWages = Math.round((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth);
                m.EPFContribution = Math.round(
                    (((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth) * 12) / 100
                );
                m.EPSContribution = Math.round(
                    (((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth) * 8.33) / 100
                );
                m.EPFEPSDIFF =
                    Math.round((((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth) * 12) / 100) -
                    Math.round((((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth) * 8.33) / 100);
                m.NCPDAYS = totalDaysOfMonth - (count.count ? count.count : 0);
                m.REFUNDOFADVANCE = 0;

                str = `${str}${orders?.employees[i]?.companyDetails?.UAN}#~#${orders?.employees[i]?.personalDetails?.fullName.replace(
                    / /g,
                    ''
                )}#~#${Math.round(
                    (orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth +
                        (orders?.employees[i]?.salaryDetails?.hra * count.count) / totalDaysOfMonth +
                        (orders?.employees[i]?.salaryDetails?.con * count.count) / totalDaysOfMonth +
                        (orders?.employees[i]?.salaryDetails?.medical * count.count) / totalDaysOfMonth +
                        (orders?.employees[i]?.salaryDetails?.education * count.count) / totalDaysOfMonth
                )}#~#${Math.round((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth)}#~#${Math.round(
                    (orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth
                )}#~#${Math.round((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth)}#~#${Math.round(
                    (((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth) * 12) / 100
                )}#~#${Math.round(
                    (((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth) * 8.33) / 100
                )}#~#${
                    Math.round((((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth) * 12) / 100) -
                    Math.round((((orders?.employees[i]?.salaryDetails?.basicSalary * count.count) / totalDaysOfMonth) * 8.33) / 100)
                }#~#${totalDaysOfMonth - (count.count ? count.count : 0)}#~#${0}\n`;
                x.push(m);
            }
            setdownloadstring(str);
            setdata(x);
        }
    }, [orders]);
    console.log(data);

    return (
        <div>
            <CsvDownloader filename={`ECR Challan ${date.getMonth() + 1}`} extension=".csv" columns={columns} datas={data}>
                <button
                    type="button"
                    className="gray-button"
                    onClick={() => {
                        downloadTxtFile(downloadstring);
                    }}
                >
                    <FileDownloadOutlinedIcon />
                    ECR Challan
                </button>
            </CsvDownloader>
        </div>
    );
}

export function SalaryStatement(props) {
    const { parentCallback } = props;
    return (
        <div>
            <button type="button" className="gray-button" onClick={parentCallback}>
                <FileDownloadOutlinedIcon />
                Bank Statement
            </button>
        </div>
    );
}

export function SalaryStatementFormat(props) {
    const { parentCallback3 } = props;
    return (
        <div>
            <button type="button" className="gray-button" onClick={parentCallback3}>
                <FileDownloadOutlinedIcon />
                Monthly Salary Sheet
            </button>
        </div>
    );
}
