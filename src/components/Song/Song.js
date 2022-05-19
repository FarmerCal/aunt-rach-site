import React from 'react';

import { Section, SectionDivider, SectionTitle, Section2, SectionText, SectionSubTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './SongStyles';

const Song = (props) => (
   <div>
  <Section id='known-legend'>
<SectionDivider />
      <SectionTitle main> Known Legend</SectionTitle>
      <SectionSubTitle>Lyrics by Dave, slightly modified by Cat & Ross, there is audio which I'm sure you heard, I don't yet know how to imbed audio playback ¯\_(ツ)_/¯ </SectionSubTitle>
      <SectionText>
        (Based on Unknown Legend by Neil Young)<br />
        She used to work in a deli<br />
        She likes red pepper jelly<br />
        She made pop ups and cared for those in need<br />
        She grew up in London town<br />
        Putting strong roots down <br />
        Family of faith helped her to grow her wings<br />
      </SectionText>
      <SectionText>
        Somewhere on a London sidewalk<br />
        SShe rides a streamered tricycle<br />
        Her long brown hair flyin' in the wind<br />
        She's just beginning her ride  <br />
        She’s always teaching with pride  <br />
        Ballet and Beal, England fill the years <br />
        Fill the years<br />
      </SectionText>
      <SectionText>
        It never comes easy<br />
        Stay calm and teach on <br />
        She found a calling with absorbent minds <br />
        Now she's lookin’ for a change <br />
        Lord help her choose a lane <br />
        So many options out there for to find<br />
      </SectionText>
      <SectionText>
        Somewhere near an Arva cornfield <br />
        She drives a brown Corolla <br />
        Her long brown hair flyin' in the wind<br />
        She's starting to envision her life<br />
        Still yet to hit her stride <br />
        Neil Young’s words mixing with the breeze<br />
        With the Breeze <br />
      </SectionText>
      <SectionText>
        Somewhere in the Golden Horseshoe <br />
        She drives a Honda Prelude<br />
        Her long brown hair flyin' in the wind<br />
        She often gives her friends a ride <br />
        Her future love is obliged<br />
        She finds a home at Little Trinity <br />
        At Little T<br />
      </SectionText>
      <SectionText>
        Somewhere on an open highway <br />
        She drives a Mazda hatchback <br />
        Her three loves singing in the breeze <br />
        She’s long since fully hit her stride <br />
        Lord she knows her future is wide<br />
        Lord knows her needs so she can have some peace<br />
        Have some peace…<br />
      </SectionText>
    </Section>
  </div>
);

export default Song;