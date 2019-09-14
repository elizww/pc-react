import React from 'react';
import './App.scss';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './layout/layout.scss';
import './App.scss';
import AppTop from "./components/layout/AppTop";
import AppMenu from "./components/layout/AppMenu";
function App() {
  return (
    <div className="layout-wrapper layout-static">
      <AppTop />
      <AppMenu />
        {/*<AppMain />
      <AppFooter />
      */}<div className="layout-mask"/>
    </div>
  );
}

export default App;
