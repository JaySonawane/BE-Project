// const Card=() =>{
//     return(
//         <div>
//             Card Component
//         </div>
//     )
// }

// export default Card;

import React from 'react';

const Card = ({id, title, imageSrc, description}) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={imageSrc} alt="News" />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
