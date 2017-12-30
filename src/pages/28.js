import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>Research</h2>
      We continue to do usability testing of these components through UsabilityHub and throughout our product user testing. The design system is a living and breathing internal product. It’s going to change and we need to have a flexible enough system that manages that change well. The next set of things we will research is how our design system accommodates for our very different products serving vastly different users.  We are going to be looking at extending the system past its foundational level and building upon it for product specific visual styles and feel.
    </Container>
  </div>
);
