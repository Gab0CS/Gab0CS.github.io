import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
      My Portfolio
      </SectionTitle>
      <SectionText>
        Hello, I'm a Front-end developer and in this Portfolio rest 
        information about me and some of my projects. 
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Gab0CS/Gab0CS.github.io'}> Portfolio repository</Button>
    </LeftSection>
  </Section>
);

export default Hero;