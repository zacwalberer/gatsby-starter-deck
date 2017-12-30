import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      I took over as lead on the design system and helped start building the design system from the ground up. We fist defined our UX principles as a team which would help guide our future product work and the building of the design system. Next, I worked with our team in doing an inventory of our products and the patterns and the components used. After our inventory had been completed, we focused on the most common components and patterns that needed to be redesigned and documented. We created a roadmap for this process and as a team have been defining and redefining these components and patterns as we build product.
    </Container>
  </div>
);
