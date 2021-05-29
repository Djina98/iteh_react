import React from 'react';
import Icon1 from '../../images/svg-6.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-5.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
    } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Plan vacation</ServicesH2>
                    <ServicesP>We help plan your vacation from start to end</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your expenses while on trip abroad</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Big experiences</ServicesH2>
                    <ServicesP>With an average of 24 guests per departure, Globus makes it easy to explore the world with calm and confidence.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
