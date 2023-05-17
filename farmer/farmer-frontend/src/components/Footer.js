/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="ui inverted vertical footer segment" id="footer">
            <div className="ui container">
                <div className="ui stackable inverted divided equal height stackable grid">
                    <div className="three wide column">
                        <h4 className="ui inverted header">About</h4>
                        <div className="ui inverted link list">
                            <a href="#" className="item">Contact Us</a>
                            <a href="#" className="item">About Us</a>
                            <a href="#" className="item">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="seven wide column">
                        <h4 className="ui inverted header">Owner</h4>
                        <p>This Website Belongs to BE Project GrpId-69</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;