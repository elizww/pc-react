import React from 'react';
import AppProfile from "./AppProfile";
import LeftMenu from "./LeftMenu";
import PropTypes from 'prop-types';

const AppMenu = () => {
    const logo = 'assets/layout/images/logo-white.png';
    const menu = [
        {
            label: 'Productions', icon: 'pi pi-fw pi-briefcase',
            items: [
                {label: 'Milk', to: '/sample'},
                {label: 'Dikla', to: '/sample'},
                {label: 'Matrix', to: '/sample'}
            ]
        },
        { label: 'Budget', icon: 'pi pi-fw pi-money-bill', to: '/' },
        { label: 'About', icon: 'pi pi-fw pi-info-circle', to: '/' },
        { label: 'Alerts', icon: 'pi pi-fw pi-bell', to: '/' , alertBadge: '4'},
        { label: 'Contacts', icon: 'pi pi-fw pi-users', to: '/' },
        { label: 'Activities', icon: 'pi pi-fw pi-calendar', badge: '5',
            items: [
                {label: 'Reports', to: '/panels', badge: '2'},
                {label: 'Events', to: '/'},
                {label: 'Meetings', to: '/'},
                {label: 'Messages', to: '/', badge: '3'}
            ]
        },
    ];

    return (
        <div className="layout-sidebar layout-sidebar-dark">
            <div className="layout-logo">
                <img alt="Logo" height="50" width="188" src={logo} />
            </div>
            <AppProfile />
            <LeftMenu model={menu} />
        </div>
    );
};

AppMenu.propTypes = {
    model: PropTypes.array.isRequired
};

export default AppMenu;