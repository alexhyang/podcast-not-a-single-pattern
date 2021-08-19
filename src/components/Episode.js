import React from 'react';

function Episode(props) {
    return (
        <div className="episode col card">
            This is episode {props.id}.
        </div>
    );
}

export default Episode;