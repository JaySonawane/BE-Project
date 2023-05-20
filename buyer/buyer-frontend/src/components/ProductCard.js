import React from 'react';

const ProductCard = ({ name, price, unit, location, image }) => {
    const imageUrl = process.env.PUBLIC_URL + '/images/' + image;

    return (
        <div className="ui card card-container">
            <div className="ui image">
                <img src={imageUrl} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="meta">{price} per {unit}</div>
                <div className="description">{location}</div>
            </div>
        </div>
    );
};

export default ProductCard;
