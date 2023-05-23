import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:52+ 951-248-6590">52+ 951-248-6590</LinkItem>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:gabocanseco@gmail.com">gabocanseco@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Gab0CS" target='blank'>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/gabriel-canseco" target='blank'>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          </SocialContainer>
      
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
