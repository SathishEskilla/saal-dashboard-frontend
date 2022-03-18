import React from "react";
import DataGridComponent from "../../components/data-grid/data-grid-component";
import HeaderComponent from "../../components/header/header-component";

import "./dashboard-component.scss";

class DashboardComponent extends React.Component {
  render() {
    return (
      <div className="dashboard-component">
        <HeaderComponent></HeaderComponent>
        <DataGridComponent></DataGridComponent>
      </div>
    );
  }
}

export default DashboardComponent;
