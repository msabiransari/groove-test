window.onload = function() {
  console.log("React Application Initializing ***** ");

  var appUrl = "https://local-biz.herokuapp.com/";

  class Greetings extends React.Component {

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
      return React.createElement('h1', null, 'Groove Greetings, ' + this.props.name + '!');
    }
  }

  ReactDOM.render(
    React.createElement(Greetings, { name : 'Muhammad Sabir' }),
    document.getElementById('app')
  );
};