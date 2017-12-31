import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>What is interesting about the problem, process, or solution?</h2>
      When the native app was first built, most of the web features were added to the native app which created a bloated experience. We saw friction from users and low use of the app because of this. This prompted us to conduct research which identified the problems and the features that would solve them. Cutting back several features of the app improved use and increased focus on an experience tailored for mobile devices.
    </Container>
  </div>
);
