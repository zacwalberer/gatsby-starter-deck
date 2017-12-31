import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>Impact</h2>
      There is still a lot of work to do on the system and plans for its future. However, since its creation it’s served the organization very well and has been an amazing tool to onboard new engineers and designers. Our design and development teams now have a shared vocabulary around the system and can confidently build world class products together. The system has made decision making simpler as it has given everyone a faster way to explore solving complex problems that small businesses encounter.
    </Container>
  </div>
);
