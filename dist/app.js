window.onload = function() {
  const firebase = require("firebase");
  require("firebase/firestore");

  firebase.initializeApp({
    apiKey: 'AIzaSyBzQLxYmWIOATomDgkhmddF2BTa6lFwKb8',
    authDomain: 'https://groove-test-af9ed.firebaseio.com',
    projectId: 'groove-test-af9ed'
  });

  console.log("Firebase initialized ***** ");

  var db = firebase.firestore();

  db.collection("businesses").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
      });
  });


  class Greetings extends React.Component {
    render() {
      return React.createElement('h1', null, 'Groove Greetings, ' + this.props.name + '!');
    }
  }

  ReactDOM.render(
    React.createElement(Greetings, { name : 'Muhammad Sabir' }),
    document.getElementById('app')
  );
};