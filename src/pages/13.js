import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>What does it do?</h2>
      Propel easily organizes customer information in one place, and then allows owners to choose from proven marketing campaigns, created by experts. Once selected, Propel guides owners through an easy, step-by-step experience to personalize and run the campaigns in minutes. Propel’s simplified experience allows any small business to grow its sales in days, versus weeks or months.
    </Container>
  </div>
);
