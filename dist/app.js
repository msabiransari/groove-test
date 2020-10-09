window.onload = function() {
  console.log("React Application Initializing ***** ");

  var appUrl = "http://businesses-env.eba-a8pkrbiw.us-west-1.elasticbeanstalk.com/";

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