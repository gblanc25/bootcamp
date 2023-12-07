import React from 'react';
import './Homepage.css';
import { Link, withRouter } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      displayFront: true,
    };
  }

  render() {
    if (!isLoaded(this.props.deck)) {
        return <div>Loading...</div>;
      }
    let keys = Object.keys(this.props["deck"]["homepage"]);
    let names = Object.values(this.props["deck"]["homepage"]);
    return (
        <><h1>Homepage</h1>
        <Link to='/editor'>Create a New Deck</Link>
        <h2>Flashcards</h2>
        {keys.map((key, index) => <><Link to={'/viewer/' + key}>{names[index]["name"]}</Link><br></br></>)}</>
    );
  }
}

// Steps to make Homepage appear for some reason: 
// run npm start
// change the const deck line to be const deck = state.firebase.data["1"];
// refresh webpage, should say loading on webpage
// now return that line to as it originally was, homepage should show up

const mapStateToProps = (state) => {
    const deck = state.firebase.data;
    return { deck: deck };
  };
  
export default compose(
  withRouter,
  firebaseConnect(props => {
    return [{ path: `/homepage/` }];
  }),
  connect(mapStateToProps),
)(Homepage);
