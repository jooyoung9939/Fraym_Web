import React from 'react';
import WhoWeAre1 from '../assets/images/WhoWeAre_1.png';
import WhoWeAre2 from '../assets/images/WhoWeAre_2.png';
import WhoWeAre3 from '../assets/images/WhoWeAre_3.png';
import WhoWeAre4 from '../assets/images/WhoWeAre_4.png';
import WhoWeAre5 from '../assets/images/WhoWeAre_5.png';
import WhoWeAre6 from '../assets/images/WhoWeAre_6.png';
import WhoWeAre7 from '../assets/images/WhoWeAre_7.png';
import WhoWeAre8 from '../assets/images/WhoWeAre_8.png';

const images = [WhoWeAre1, WhoWeAre2, WhoWeAre3, WhoWeAre4, WhoWeAre5, WhoWeAre6, WhoWeAre7, WhoWeAre8];

const WhoWeAre = () => {
    return (
        <div className="who-we-are-container">
            {images.map((img, index) => (
                <img key={index} src={img} alt={`WhoWeAre${index + 1}`} className="who-we-are-img" />
            ))}
        </div>
    );
};

export default WhoWeAre;
