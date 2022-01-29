import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Calendar from 'ui-component/attendenceui/attendencecalander/attendencedate';

// Dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// Employee Routing
const AddEmployee = Loadable(lazy(() => import('views/employee/addEmployee')));
const ViewEmployee = Loadable(lazy(() => import('views/employee/viewEmployee')));

// Attendance Routing
const AddAttendance = Loadable(lazy(() => import('views/attedance/addAttendance')));
const ViewAttendance = Loadable(lazy(() => import('views/attedance/viewAttendance')));
const Overtime = Loadable(lazy(() => import('views/attedance/overtime')));
const LeaveManage = Loadable(lazy(() => import('views/attedance/leaveManage')));

// Payments Routing
const ViewSalary = Loadable(lazy(() => import('views/payments/viewSalary')));
const ViewBonus = Loadable(lazy(() => import('views/payments/viewBonus')));
const ECRChallan = Loadable(lazy(() => import('views/payments/ECRChallan')));
// User Role Routing
const AddUser = Loadable(lazy(() => import('views/roles/addUser')));
const ManageUser = Loadable(lazy(() => import('views/roles/manageUser')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/employee/add-employee',
            element: <AddEmployee />
        },
        {
            path: '/employee/view-employee',
            element: <ViewEmployee />
        },
        {
            path: '/attendance/add-attendance',
            element: <AddAttendance />
        },
        {
            path: '/attendance/view-attendance',
            element: <ViewAttendance />
        },
        {
            path: '/attendance/overtime',
            element: <Overtime />
        },
        {
            path: '/attendance/leave-manage',
            element: <LeaveManage />
        },
        {
            path: '/payments/view-salary',
            element: <ViewSalary />
        },
        {
            path: '/payments/ecr-challan',
            element: <ECRChallan />
        },
        {
            path: '/roles/add-user',
            element: <AddUser />
        },
        {
            path: '/roles/manage-user',
            element: <ManageUser />
        },
        {
            path: '/attendance/event/:id',
            element: <Calendar />
        }
    ]
};

export default MainRoutes;
