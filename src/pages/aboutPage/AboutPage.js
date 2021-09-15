/* eslint-disable no-unused-vars */
import React from 'react';
import aboutImg from '../../assets/hero-bcg.jpeg';
import { PageHero } from '../../components';
import Wrapper from './AboutPage.style';

const AboutPage = () => (
    <main>
        <PageHero title="about" />
        <Wrapper className="page section section-center">
            <img src={aboutImg} alt="aboutImg" />
            <article>
                <div className="title">
                    <h2>our story</h2>
                    <div className="underline" />
                </div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam esse possimus at
                    vel nihil accusantium voluptatem ipsam facere quo rerum ipsum in mollitia,
                    voluptas temporibus ea necessitatibus exercitationem provident tempora sit vero
                    dolores. Qui corporis harum maiores sunt expedita molestiae numquam molestias
                    fuga voluptates! Tempora accusamus quaerat eum officiis id!
                </p>
            </article>
        </Wrapper>
    </main>
);

export default AboutPage;
