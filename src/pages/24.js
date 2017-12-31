import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Container>
      <h2>What does it do?</h2>
      The design system at Infusionsoft exists to provide a cohesive design language, principles, shared vocabulary, and building blocks for quicker iteration and crafting of experiences. Foundational variables like color, typography, spacing, depth, animation, and iconography are at its core. It also defines accessibility and content guidelines, component and pattern examples with documentation, utility documentation, and resources - like Sketch libraries used in Abstract and a Vue.js sandbox for prototyping.
    </Container>
  </div>
);
