import React from 'react';

function Parallax(props) {
  return (
    <div className={"Parallax " + props.backgroundImage } >
      <div className={props.centerText}>
        <p>
          {props.words}
        </p>
      </div>
    </div>
  );
}

export default Parallax;