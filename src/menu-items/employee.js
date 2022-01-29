// assets
import { IconAlarm, IconEyeglass, IconCalendarTime, IconCalendarOff } from '@tabler/icons';
// constant
const icons = {
    IconAlarm,
    IconEyeglass,
    IconCalendarTime,
    IconCalendarOff
};

// ==============================|| ATTENDANCE MENU ITEMS ||============================== //

const employee = {
    id: 'employee',
    title: 'Employee',
    type: 'group',
    children: [
        {
            id: 'addEmployee',
            title: 'Add Employee',
            type: 'item',
            url: '/employee/add-employee',
            icon: icons.IconAlarm,
            breadcrumbs: false
        },
        {
            id: 'viewEmployee',
            title: 'View Employee',
            type: 'item',
            url: '/employee/view-employee',
            icon: icons.IconEyeglass,
            breadcrumbs: false
        }
    ]
};

export default employee;
