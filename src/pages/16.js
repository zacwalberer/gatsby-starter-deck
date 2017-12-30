import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>Research</h2>
      Throughout the project we did various research on the target market and with our partners who build these types of automations. Our target market became more focused as we fleshed out our high level problems. Ultimately, this app was born out of pain felt from smaller businesses that were unable to get value from our complex Campaign Builder. We did many “follow me homes” where we went to small businesses homes and offices to watch and observe how they worked. Taking this research back with us to iterate and cut away features on our roadmap that were not going to help solve our high level problems.
    </Container>
  </div>
);
