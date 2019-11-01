import React from 'react';
import {Menubar} from "primereact/menubar";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {withRouter} from "react-router-dom";

const AppTop = ({history}) => {
    const redirect = (path) => {
        history.push(path);
    };

    const items =[
        {
            label:'Project',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New Project',
                    icon:'pi pi-fw pi-plus',
                    command: () => redirect('/new')
                },
                {
                    label:'Info',
                    icon:'pi pi-fw pi-info',
                },
                {
                    label:'Save Project As',
                    icon:'pi pi-fw pi-save'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-upload'
                },
                {
                    label:'Import',
                    icon:'pi pi-fw pi-download'
                }, {
                    separator:true
                },
                {
                    label:'Settings',
                    icon:'pi pi-fw pi-cog'
                },
            ]
        },
        {
            label:'Budget',
            icon:'fa fa-chart-pie',
            items:[
                {
                    label:'Starting Budget',
                    icon: 'fas fa-fast-backward',
                    command: () => redirect('/budget')
                },
                {
                    label:'Manage Budget',
                    icon: 'fas fa-hand-holding-usd',
                    command: () => redirect('/budget')
                }
            ]
        },
        {
            label:'Script',
            icon:'fas fa-scroll',
        }
    ];
    return (
        <div className="layout-topbar ">
            <Menubar model={items}>
                <InputText placeholder="Search" type="text"/>
                <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}}/>
            </Menubar>
        </div>
    )
};

export default withRouter(AppTop);