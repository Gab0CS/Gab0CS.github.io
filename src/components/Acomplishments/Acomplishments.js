import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Happy freelance clients.'},
  { number: 2, text: 'Years of experience.', },
  { number: 6, text: 'Online courses and certifications.', },
  { number: 1, text: 'Bachelor Degree.', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Acomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index) =>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
