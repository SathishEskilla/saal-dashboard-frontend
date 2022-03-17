
import React from 'react';

import './header-component.scss';

const HeaderComponent: React.FC = () => {
  return(
    <div className="header-component">
      <div className="header-component__logo">
        <img src='saal_logo.svg' alt='saal logo' />
      </div>
      <div className="header-component__lang-btn">عربي</div>
    </div>
  )
}

export default HeaderComponent;
