import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>What is interesting about the problem, process, or solution?</h2>
      When the native app was first built, most of the web features were added to the native app creating a bloated experience. We saw friction from users and low use of certain features because of this. This prompted us to conduct research around which problems to solve for and which features to add to the mobile app to solve for those problems. Cutting back the features of the app improved use and focused on an experience tailored for mobile devices.
    </Container>
  </div>
);
