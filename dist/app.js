window.onload = function() {
  console.log("React Application Initializing ***** ");

  var appUrl = "https://local-biz.herokuapp.com/";

  var columnDefs = [
    {headerName: "Business Name", field: "name"},
    {headerName: "Street", field: "street"},
    {headerName: "City", field: "city"},
    {headerName: "State/Province", field: "state"},
    {headerName: "Zip/Postal", field: "zip"},
    {headerName: "Phone", field: "phone"}
  ];

  var gridOptions = {
    columnDefs: columnDefs,
    rowData: []
  };

  class BusinessList extends React.Component {

    componentDidMount() {
      console.log("Fetching data from " + appUrl);
      fetch(appUrl)
        .then(res => res.json())
        .then(
          (businesses) => {
            this.setState({
              businesses: businesses
            });
          },
          (error) => {
            this.setState({
              businesses: []
            });
          }
        );
    }

    render() {
      gridOptions.rowData = this.state.businesses;
      new agGrid.Grid(document.getElementById('businessListId'), gridOptions);
      //return React.createElement('table', { children: createRows(businesses) });
      //return React.createElement('h1', null, 'Groove Greetings, ' + this.props.name + '!');
    }
  }

  ReactDOM.render(
    React.createElement(BusinessList),
    document.getElementById('app')
  );
};