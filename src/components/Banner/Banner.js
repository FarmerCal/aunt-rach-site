import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './BannerStyles';

const Banner = (props) => (
   <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Happy 50th Rach Day! <br />
        You're a legend!
      </SectionTitle>
      <SectionText>
        A loving family, wonderful memories, and more to come! <br />
        We all hope you have the best of birthdays and the best of life!
      </SectionText>
    </LeftSection>
  </Section>
);

export default Banner;