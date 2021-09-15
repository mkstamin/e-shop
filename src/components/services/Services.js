import React from 'react';
import { services } from '../../utils/constants';
import Wrapper from './Services.style';

const Services = () => (
    <Wrapper>
        <div className="section-center">
            <article className="header">
                <h3>
                    custom furniture <br /> built only for you
                </h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque asperiores
                    totam ad corporis porro harum accusamus error laborum quos nobis.
                </p>
            </article>
            <div className="services-center">
                {services.map((service) => {
                    const { id, icon, title, text } = service;
                    return (
                        <article key={id} className="service">
                            <span className="icon">{icon}</span>
                            <h4>{title}</h4>
                            <p>{text}</p>
                        </article>
                    );
                })}
            </div>
        </div>
    </Wrapper>
);

export default Services;
