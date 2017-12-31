import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>Impact</h2>
      The automation builder is in Alpha at the moment and a lot of extension work still has to be built. We are focused on improving the experience of building as an expert builder and small business end-user. We’ve received good feedback throughout the past couple of months and have seen the solutions to the high level problems become clearer and more solid.
    </Container>
  </div>
);
