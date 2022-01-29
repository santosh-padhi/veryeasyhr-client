// assets
import { IconUserPlus, IconUsers } from '@tabler/icons';

// constant
const icons = { IconUserPlus, IconUsers };

// ==============================|| USER ROLES MENU ITEMS ||============================== //

const roles = {
    id: 'user-roles',
    title: 'User Roles',
    type: 'group',
    children: [
        {
            id: 'add-user',
            title: 'Add User',
            type: 'item',
            url: '/roles/add-user',
            icon: icons.IconUserPlus,
            breadcrumbs: false
        },
        {
            id: 'manage-user',
            title: 'Manage User',
            type: 'item',
            url: '/roles/manage-user',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
    ]
};

export default roles;
