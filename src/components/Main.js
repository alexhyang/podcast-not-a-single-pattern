import React from 'react';
import Nav from './Nav';
import Slick from './Slick';
import EpisodeContainer from './EpisodeContainer';

function Main(props) {
    return (
        <div className="main">
            <Nav />
            <Slick />
            <EpisodeContainer />
        </div>
    );
}

export default Main;