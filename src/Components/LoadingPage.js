import React, { Component } from 'react';
import pikachuLoading from '../images/pikachu_loading.gif';
import '../Styles/LoadingPage.css';

class LoadingPage extends Component {
    render() {
        return (
            <div className='containerLoadingPikachu'>
                <img
                    src={pikachuLoading}
                    alt="Loading page..."
                />
            </div>
        );
    };
};

export default LoadingPage;