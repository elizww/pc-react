import React, {useState} from 'react';
import classNames from 'classnames';

const AppProfile = () => {
  const [expanded, setExpanded] = useState(false);

  function onClick(event) {
      event.preventDefault();
      setExpanded(!expanded);
  }

  return (
      <div className="layout-profile">
          <div>
              <img src="assets/layout/images/profile.png" alt="" />
          </div>
          <button className="p-link layout-profile-link" onClick={onClick}>
              <span className="username">Claire Williams</span>
              <i className="pi pi-fw pi-cog"/>
          </button>
          <ul className={classNames({'layout-profile-expanded': expanded})}>
              <li><button className="p-link"><i className="pi pi-fw pi-user"/><span>Account</span></button></li>
              <li><button className="p-link"><i className="pi pi-fw pi-inbox"/><span>Notifications</span><span className="menuitem-badge">2</span></button></li>
              <li><button className="p-link"><i className="pi pi-fw pi-power-off"/><span>Logout</span></button></li>
          </ul>
      </div>
  )
};

export default AppProfile;