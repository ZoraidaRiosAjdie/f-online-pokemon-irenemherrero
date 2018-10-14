import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <div className="headerContainer">
                <div className="pikachuLeftEar"></div>
                <h1 className='appTitle'>Pokemon Searcher</h1>
                <div className="pikachuRightEar"></div>
            </div>
         );
    }
}
 
export default Header;