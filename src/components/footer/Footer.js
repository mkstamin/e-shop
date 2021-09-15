import React from 'react';
import Wrapper from './Footer.style';

const Footer = () => (
    <Wrapper>
        <h5>
            &copy; {new Date().getFullYear()}
            <a href="http://mkstamin.live/" target="_blank" rel="noreferrer">
                <span> Mks Tamin</span>
            </a>
        </h5>
        <h5>. All rights reserved</h5>
    </Wrapper>
);

export default Footer;
