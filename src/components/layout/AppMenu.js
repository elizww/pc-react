import React from 'react';
import AppProfile from "./AppProfile";
import LeftMenu from "./LeftMenu";

const AppMenu = () => {
    const logo = 'assets/layout/images/logo-white.png';
    const menu = [
        {
            label: 'Breakdown', icon: 'pi pi-fw pi-briefcase',
            items: [
                {label: 'Calendar', icon: 'fas fa-calendar-alt', to: '/'},
                {label: 'Pre Production', icon: 'fas fa-business-time', to: '/'},
                {label: 'Shooting (Call Sheets)', icon: 'fas fa-video', to: '/shooting'},
                {label: 'Post Production', icon: 'fas fa-film', to: '/'}
            ]
        },
        {label: 'Locations', icon: 'pi-directions pi pi-fw', to: '/'},
        {
            label: 'Contacts', icon: 'pi pi-fw pi-id-card',  items: [
                {label: 'Cast', to: '/'},
                {label: 'Crew', to: '/'},
                {label: 'Service Providers', to: '/'}
            ]
        },
        {label: 'Alerts', icon: 'pi pi-fw pi-bell', to: '/', alertBadge: '4'},
        {
            label: 'Forms', icon: 'fab fa-wpforms pi-fw',
            items: [
                {label: 'Storyboard', to: '/'},
                {label: 'Floor Plan', to: '/'},
                {label: 'The Daily Report', to: '/'},
                {label: 'Post Mortem Report', to: '/', badge: '3'}
            ]
        },
        {
            label: 'Activities', icon: 'pi pi-fw pi-calendar', badge: '5',
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
                <img alt="Logo" height="50" width="188" src={logo}/>
            </div>
            <AppProfile/>
            <LeftMenu model={menu}/>
        </div>
    );
};

export default AppMenu;