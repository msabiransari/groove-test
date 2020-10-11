import { React, Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

var appUrl = "https://local-biz.herokuapp.com/";

class BusinessList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gridOptions: {
        columnDefs: [
          {headerName: "Business Name", field: "name"},
          {headerName: "Street", field: "street"},
          {headerName: "City", field: "city"},
          {headerName: "State/Province", field: "state"},
          {headerName: "Zip/Postal", field: "zip"},
          {headerName: "Phone", field: "phone"}
        ],
        rowData: []
      }
    }

    this.loadData();
  }

  loadData() {
    console.log("Fetching data from " + appUrl);
    fetch(appUrl)
      .then(res => res.json())
      .then(
        (data) => {
          console.log("Data loaded ", data);
          const go = this.state.gridOptions;
          go.rowData = data;
          this.setState({
            gridOptions: go
          });
        },
        (error) => {
          console.log("Error while loading data", error);
        }
      );
  }

  render() {
    console.log("State data ", this.state);
    return (
      <div className="ag-theme-alpine" style={ { height: 400, width: 600 } }>
        <AgGridReact gridOptions={this.state.gridOptions}></AgGridReact>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(BusinessList), document.getElementById('app'));