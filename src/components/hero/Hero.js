import React from 'react';
import { Link } from 'react-router-dom';
import heroBcg2 from '../../assets/hero-bcg-2.jpeg';
import heroBcg from '../../assets/hero-bcg.jpeg';
import Wrapper from './Hero.style';

const Hero = () => (
    <Wrapper className="section-center">
        <article className="content">
            <h1>
                design your
                <br /> confort zone
            </h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur magni
                facilis adipisci possimus maxime optio iusto qui suscipit eum.
            </p>
            <Link to="products" className="btn hero-btn">
                shop now
            </Link>
        </article>
        <article className="img-container">
            <img src={heroBcg} alt="heroBcg" className="main-img" />
            <img src={heroBcg2} alt="heroBcg2" className="accent-img" />
        </article>
    </Wrapper>
);

export default Hero;
