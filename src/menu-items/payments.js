// assets
import { IconCash, IconBusinessplan, IconReceipt } from '@tabler/icons';

// constant
const icons = {
    IconCash,
    IconBusinessplan,
    IconReceipt
};

// ==============================|| PAYMENTS MENU ITEMS ||============================== //

const payments = {
    id: 'payments',
    title: 'Payments',
    type: 'group',
    children: [
        {
            id: 'view-salary',
            title: 'View Salary',
            type: 'item',
            url: '/payments/view-salary',
            icon: icons.IconCash,
            breadcrumbs: false
        },
        {
            id: 'ecrChallan',
            title: 'ECR Challan',
            type: 'item',
            url: '/payments/ecr-challan',
            icon: icons.IconReceipt,
            breadcrumbs: false
        }
    ]
};

export default payments;
