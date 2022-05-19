import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ImagesStyles';
import { Section, SectionDivider, SectionTitle, Section2 } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Images = () => (
  <div>
  <Section>
<SectionDivider />
    <SectionTitle main> Thousand Words</SectionTitle>
  </Section>
  <Section2 nopadding id="projects">
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
        </BlogCard>
      ))}
    </GridContainer>
    </Section2>
    </div>
);

export default Images;