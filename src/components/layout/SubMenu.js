import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import classNames from 'classnames';

const SubMenu = ({className, items, onMenuItemClick, root}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    function _onMenuItemClick(event, item, index) {
        //avoid processing disabled items
        if(item.disabled) {
            event.preventDefault();
            return true;
        }

        //execute command
        if(item.command) {
            item.command({originalEvent: event, item: item});
        }

        if(index === activeIndex)
            setActiveIndex(null);
        else
            setActiveIndex(index);

        if(onMenuItemClick) {
            onMenuItemClick({
                originalEvent: event,
                item: item
            });
        }
    }

    function renderLinkContent(item) {
        let submenuIcon = item.items && <i className="pi pi-fw pi-angle-down menuitem-toggle-icon"/>;
        let badge = item.badge && <span className="menuitem-badge">{item.badge}</span>;
        let alertBadge = item.alertBadge && <span className="alert-badge">{item.alertBadge}</span>;

        return (
            <React.Fragment>
                <i className={item.icon}/>
                <span>{item.label}</span>
                {submenuIcon}
                {alertBadge}
                {badge}
            </React.Fragment>
        );
    }

    function renderLink(item, i) {
        let content = renderLinkContent(item);

        if (item.to) {
            return (
                <NavLink activeClassName="active-route" to={item.to} onClick={(e) => _onMenuItemClick(e, item, i)} exact target={item.target}>
                    {content}
                </NavLink>
            )
        }
        else {
            return (
                <a href={item.url} onClick={(e) => _onMenuItemClick(e, item, i)} target={item.target}>
                    {content}
                </a>
            );

        }
    }

    let _items = items && items.map((item, i) => {
        let active = activeIndex === i;
        let styleClass = classNames(item.badgeStyleClass, {'active-menuitem': active && !item.to});

        return (
            <li className={styleClass} key={i}>
                {item.items && <div className='arrow'/>}
                {renderLink(item, i)}
                <SubMenu items={item.items} onMenuItemClick={onMenuItemClick}/>
            </li>
        );
    });

    return _items ? <ul className={className}>{_items}</ul> : null;
};

SubMenu.propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    onMenuItemClick: PropTypes.func,
    root: PropTypes.bool
};

export default SubMenu;