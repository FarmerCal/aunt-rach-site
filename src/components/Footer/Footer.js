import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Eduction</LinkTitle>
          <LinkItem href="https://www.linkedin.com/company/13022/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3YNRkeLeRdOKmaL0xeN78Q%3D%3D"target="_blank">Loyola University Maryland</LinkItem>
          <LinkItem href="https://www.linkedin.com/search/results/all/?keywords=Washington+Montessori+Institute&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BuyaZW5ZhSkeqQ9AvN2bC5A%3D%3D"target="_blank">Washington Montessori Institute</LinkItem>
          <LinkItem href="https://www.linkedin.com/search/results/all/?keywords=Foundation+for+Montessori+Education&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BuyaZW5ZhSkeqQ9AvN2bC5A%3D%3D"target="_blank">Foundation for Montessori Education</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:rachel@day.com">
            rachel@day.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Rachel is a Montessori practitioner with over twenty years of classroom experience with children ages 2- 12. Rachel supports the child's own work of self-construction through the implementation of science-based, authentic Montessori pedagogy. A secondary objective is to support other adult responses to the developmental needs of children in and beyond the classroom. Her passion is Christian spirituality and she has a special interest in supporting a robust and respectful church response to its children and their spiritual formation. </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.linkedin.com/in/rachel-day-917646aa/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;