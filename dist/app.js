window.onload = function() {
  console.log("React Application Initializing ***** ");

  var appUrl = "https://local-biz.herokuapp.com/";

  class BusinessList extends React.Component {
    var columnDefs = [
      {headerName: "Business Name", field: "name"},
      {headerName: "Street", field: "street"},
      {headerName: "City", field: "city"},
      {headerName: "State/Province", field: "state"},
      {headerName: "Zip/Postal", field: "zip"},
      {headerName: "Phone", field: "phone"}
    ];

    var gridOptions = {
      columnDefs: this.columnDefs,
      rowData: []
    };

    this.state = {
      gridOptions: this.gridOptions
    }

    componentDidMount() {
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
      new agGrid.Grid(document.getElementById('businessListId'), this.state.gridOptions);
      //return React.createElement('table', { children: createRows(businesses) });
      //return React.createElement('h1', null, 'Groove Greetings, ' + this.props.name + '!');
    }
  }

  ReactDOM.render(
    React.createElement(BusinessList),
    document.getElementById('app')
  );
};