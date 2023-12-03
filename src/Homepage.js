import React from 'react';
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
    let keys = Object.keys(this.props["deck"]["homepage"])
    let names = Object.values(this.props["deck"]["homepage"])
    return (
        <><h1>Homepage</h1>
        <Link to='/editor'>Create a New Deck</Link>
        <h2>Flashcards</h2>
        {keys.map((key, index) => <><Link to={'/viewer/' + key}>{names[index]["name"]}</Link><br></br></>)}</>
    );
  }
}

const mapStateToProps = (state, props) => {
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
