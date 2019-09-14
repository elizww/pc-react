import React from 'react';
import SubMenu from "./SubMenu";

const LeftMenu = ({model}) => {
    return (
        <div className="layout-menu-container">
            <SubMenu items={model} className="layout-menu" root={true} />
        </div>
    )
};

export default LeftMenu;