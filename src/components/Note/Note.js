import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

import { Section, SectionDivider, SectionTitle, Section2, SectionText} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionSubTitle, SocialIconsContainer } from './NoteStyles';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer } from '../Footer/FooterStyles';

const Note = (props) => (
   <div>
  <Section id='end'>
<SectionDivider />
      <SectionTitle main> Notes from the dev</SectionTitle>
      <SectionSubTitle>How:</SectionSubTitle>
      <SectionText>
       Still getting better at frond-end web development, I wrote this site primarily in JavaScript using the React library and the Next.js framework. CSS styling was done with styled-components.
      </SectionText>
      <SectionText>
       The Domain is currently registered with AWS using the Nak address! (I needed a Canadian address to register the .ca ending) The pages and images and such are hosted using the AWS S3 data storage system and I am using the cloudfront CDN for epic load times!
      </SectionText>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> Check out the code on GitHub if you want!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/FarmerCal/aunt-rach-site" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

      <SectionSubTitle>Why:</SectionSubTitle>
      <SectionText>
      I am learning web dev right now and made mum a simple site, she loved it and asked me to make you one! Hopefully it's kinda nifty haha. 
      </SectionText>
      <SectionSubTitle>Note to other relatives:</SectionSubTitle>
      <SectionText>
      I don't think this will become a regular thing, nothing personal, just that's a fast-track to never seeing daylight again 😂
      </SectionText>
      <SectionSubTitle>Next Steps:</SectionSubTitle>
      <SectionText>
      If you'd like the domain just let me know when you get a hosting provider and I can add your name servers to the DNS records 👍. If you want to keep it like this, well, that's pretty easy. If you want it gone (zero hard feelings, may be weird to have some personal photos just available on the web) let me know and I'll kill it!
      </SectionText>
      <SectionSubTitle>Nephew Notes:</SectionSubTitle>
      <SectionText>
        I personally hope you have a great 50th B-Day, excited to see everyone this summer! <br />
        Your nephew, Cal
      </SectionText>
    </Section>
  </div>
);

export default Note;