import React from 'react';
import {Link} from 'react-router-dom';

class Homepage extends React.Component {
    render() {
        return (
            <><Link to='/viewer'>Card Viewer</Link>
            <br></br>
            <Link to='/editor'>Card Editor</Link></>
        )
    }
}

export default Homepage;