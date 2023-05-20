
import React from 'react';

const Card = ({ id, title, imageSrc, description }) => {
  return (
    <div className="ui card" style={{height:'200px'}}>
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
