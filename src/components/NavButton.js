import React from 'react';

function NavButton(props) {
  return (
    <div className="col">
      <button className="btn btn-secondary col">{props.text}</button>
    </div>
  );
}

export default NavButton;