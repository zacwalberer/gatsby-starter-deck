import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>Impact</h2>
      We still have a lot of work to do on the system and plans for it’s future. However, since it’s creation it’s served the organization really well and has been an amazing tool to onboard new engineers and designers. Our design and development teams now use a shared vocabulary around the system and building world class products. The system has made decision making simpler as it has given everyone a quicker way to explore solving complex problems that small businesses encounter.
    </Container>
  </div>
);
